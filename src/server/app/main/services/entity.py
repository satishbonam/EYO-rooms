import json
import math
from ..models.HotelListingModel import HotelCategoryModel, HotelModel
from ..models.ReviewsModel import ReviewsModel
from app.main.models import db
from config import key
import jwt
import datetime
from ..utils.db_save import db_save
from..utils.calculate_bill import calculate_bill


# register user if email is not present in the users table
def entity(data):

    query = "select h.name as name,h.description as description,h.images->>'$[0]' as images,h.rooms->>'$' as rooms,created_at,updated_at, h.collection->>'$[0]' as collection,c.name as category,c.tag as tag,h.accomodation_type->>'$[0]' as acc_type,h.amenities as amenities,checkin_features as c_f from hotel as h join category as c on h.category_id=c.id WHERE h.id=%d" % (
        data['hotel_id'])

    count_query = 'select count(r.id) as count, AVG(r.rating) as avg_rating from reviews as r join user as u on r.user_id = u.id WHERE r.hotel_id = %d' % (
        data['hotel_id'])

    query = query + ';'
    count_query = count_query + ';'
    count_raw = db.engine.execute(count_query)

    for row in count_raw:
        no_of_ratings = row['count']
        avg_rating = row['avg_rating']

    data_raw = db.engine.execute(query)
    front_awsome = {
        "24/7_Checkin": "faBone",
        "AC": "faFan",
        "Attached_Bathroom": "faToilet",
        "Balcony": "faPersonBooth",
        "Banquet_Hall":  "faMusic",
        "Bottled_Water": "faHandHoldingWater",
        "Card_Payment": "faMoneyBillWave",
        "Complimentary_BreakFast": "faBreadSlice",
        "Elevator": "faPersonBooth",
        "Free_Wifi": "faWifi",
        "Geyser": "faFire",
        "Hot_Water": "faHotTub",
        "King_sized_Bed": "faBed",
        "Kitchen": "faCheese",
        "Living_Room": "faRestroom",
        "Parking_Facility": "faParking",
        "Pre_Book_Meals": "faCheese",
        "Public_Bath-Male": "faHotTub",
        "Queen_sized_Bed": "faBed",
        "Refrigerator": "faThermometerEmpty",
        "Seating_Area": "faChair",
        "Single_Bed": "faBed",
        "Swimming_Pool": "faHotTub",
        "TV": "faTv",
        "Washing_Machine": "faSoap"

    }
    data = []

    for hotel in data_raw:
        temp_dict = {}
        temp_dict['name'] = hotel['name']
        temp_dict['no_of_ratings'] = str(no_of_ratings)
        temp_dict['description'] = hotel['description']
        temp_dict['rating'] = str(avg_rating)
        temp_dict['created_at'] = str(hotel['created_at'])
        temp_dict['updated_at'] = str(hotel['updated_at'])
        temp_dict['rooms'] = json.loads(hotel['rooms'])
        temp_dict['collections'] = json.loads(hotel['collection'])
        temp_dict['category'] = {
            "name": hotel['category'], "tag": hotel['tag']}
        temp_dict['images'] = {
            "large": json.loads(hotel['images'])['large'].split("#"), "medium": json.loads(hotel['images'])['medium'].split("#"), "thumb": json.loads(hotel['images'])['thumb'].split("#")}
        temp_dict['accomodation_type'] = json.loads(hotel['acc_type'])
        amenities_arr = []
        for item in dict.items(json.loads(hotel['amenities'])[0]):
            amenities_arr.append(
                {"label": item[0], "status": item[1], "frot_awsome": front_awsome[item[0]]})
        temp_dict['amenities'] = amenities_arr
        temp_dict['checkin_features'] = hotel['c_f']
        data.append(temp_dict)

    if len(data) > 0:
        return True, data
    else:
        return False, ""


def bill_data(data):
    query = "select h.name as name,h.images->>'$[0]' as images,h.rooms->>'$' as rooms,created_at,updated_at, h.collection->>'$[0]' as collection,c.name as category,c.tag as tag,h.accomodation_type->>'$[0]' as acc_type,h.amenities as amenities,checkin_features as c_f from hotel as h join category as c on h.category_id=c.id WHERE h.id=%d" % (
        data['hotel_id'])

    data_raw = db.engine.execute(query)

    select = None
    for hotel in data_raw:
        rooms = json.loads(hotel['rooms'])
        default = rooms[0]
        for room in json.loads(hotel['rooms']):
            if room['id'] == data.get('room_id'):
                select = room
                break
    selected = {}

    if select:
        selected['id'] = select['id']
        selected['type'] = select['type']
        selected['size'] = select['size']
        selected['rooms_available'] = select['max_rooms']
        selected['no_of_rooms'] = data.get('no_of_rooms') or 1
        selected['no_of_guests'] = data.get('no_of_guests') or 1
        if data.get("membership"):
            actual_price, discounted_price, savings, discount = calculate_bill(True, data.get('no_of_guests') or 1, data.get(
                'no_of_rooms') or 1, select['actual_price'], select['discount_percentage'], select['id'])
            selected['offer'] = {"membership": True, "savings": savings}
            selected['actual_price'] = actual_price
            selected['discount_price'] = discounted_price
            selected['discount'] = discount
        else:
            actual_price, discounted_price, savings, discount = calculate_bill(False, data.get('no_of_guests') or 1, data.get(
                'no_of_rooms') or 1, select['actual_price'], select['discount_percentage'], select['id'])
            selected['offer'] = {"membership": False, "savings": savings}
            selected['actual_price'] = actual_price
            selected['discount_price'] = discounted_price
            selected['discount'] = discount
        selected['check_in'] = data.get('check_in')
        selected['check_out'] = data.get('check_out')

    else:
        selected['id'] = default['id']
        selected['type'] = select['type']
        selected['size'] = select['size']
        selected['rooms_available'] = default['max_rooms']
        selected['no_of_rooms'] = data.get('no_of_rooms') or 1
        selected['no_of_guests'] = data.get('no_of_guests') or 1
        actual_price, discounted_price, savings, discount = calculate_bill(True, data.get('no_of_guests') or 1, data.get(
            'no_of_rooms') or 1, default['actual_price'], default['discount_percentage'], default['id'])
        selected['offer'] = {"membership": True, "savings": savings}
        selected['check_in'] = data.get('check_in')
        selected['check_out'] = data.get('check_out')
        selected['actual_price'] = actual_price
        selected['discount_price'] = discounted_price
        selected['discount'] = discount

    payload = {}
    payload['rooms'] = rooms
    payload['selected'] = selected
    return True, payload


# recommendations
def recommendations(payload, params):
    per_page = 10

    query = "select h.name as name,h.images->>'$[0]' as images,h.rooms->>'$' as rooms,created_at,updated_at, h.collection->>'$[0]' as collection,c.name as category,c.tag as tag,h.accomodation_type->>'$[0]' as acc_type,h.amenities as amenities,checkin_features as c_f from hotel as h join category as c on h.category_id=c.id WHERE h.id !=%d AND" % (
        payload['hotel_id'])

    if params.get('collections'):
        collections = params.getlist("collections")
        for item in collections:
            query = query + \
                "  h.collection->>'$[0].%s'=" % (item)+'"true"'+" AND"

    if params.get('category'):
        category = params.getlist("category")
        for item in category:
            query = query + "  c.name='%s' AND" % (item)

    if params.get('accomodation_type'):
        accomodation_type = params.getlist("accomodation_type")
        for item in accomodation_type:
            query = query + \
                "  h.accomodation_type->>'$[0].%s'=" % (item)+'"true"'+" AND"

    if params.get('amenities'):
        amenities = params.getlist("amenities")
        for item in amenities:
            query = query + \
                "  h.amenities->>'$[0].%s'=" % (item)+'"true"'+" AND"

    if params.get('checkin_features'):
        checkin_features = params.getlist("checkin_features")
        for item in checkin_features:
            query = query + "  h.checkin_features='%s'" % (item)

    query = query.strip('AND')
    query = query.strip('WHERE')

    query = query + ';'

    # print(query)
    data_raw = db.engine.execute(query)

    # print(data_raw)

    data = []

    for hotel in data_raw:
        temp_dict = {}
        temp_dict['name'] = hotel['name']
        temp_dict['created_at'] = str(hotel['created_at'])
        temp_dict['updated_at'] = str(hotel['updated_at'])
        temp_dict['rooms'] = json.loads(hotel['rooms'])
        temp_dict['collections'] = json.loads(hotel['collection'])
        temp_dict['category'] = {
            "name": hotel['category'], "tag": hotel['tag']}
        temp_dict['images'] = {
            "large": json.loads(hotel['images'])['large'].split("#"), "medium": json.loads(hotel['images'])['medium'].split("#"), "thumb": json.loads(hotel['images'])['thumb'].split("#")}
        temp_dict['accomodation_type'] = json.loads(hotel['acc_type'])
        temp_dict['amenities'] = json.loads(hotel['amenities'])
        temp_dict['checkin_features'] = hotel['c_f']
        data.append(temp_dict)

    return True, data


def reviews(payload):
    per_page = 10

    query = "select u.username as name,r.is_verified as is_verified,r.date as date,r.comment as comment,r.rating as rating  from reviews as r join user as u on r.user_id=u.id WHERE r.hotel_id=%d" % (
        payload['hotel_id'])
    count_query = 'select count(r.id) as count, AVG(r.rating) as avg_rating from reviews as r join user as u on r.user_id = u.id WHERE r.hotel_id = %d' % (
        payload['hotel_id'])

    query = query + ';'
    count_query = count_query + ';'
    count_raw = db.engine.execute(count_query)

    for row in count_raw:
        no_of_ratings = row['count']
        avg_rating = row['avg_rating']

    # print(query)
    data_raw = db.engine.execute(query)

    # print(data_raw)

    data = []

    for review in data_raw:
        temp_dict = {}
        temp_dict['user_name'] = review['name']
        temp_dict['is_verified'] = review['is_verified']
        temp_dict['date'] = str(review['date'])
        temp_dict['rating'] = str(review['rating'])
        temp_dict['comment'] = review['comment']

        data.append(temp_dict)

    return {"avg_rating": str(avg_rating), "no_of_ratings": no_of_ratings, "reviews": data}
