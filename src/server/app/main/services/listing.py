from ..models.HotelListingModel import HotelCategoryModel, HotelModel
from app.main.models import db
from config import key
import jwt
import datetime
from ..utils.db_save import db_save
import math
import json
import random


# register user if email is not present in the users table
def hotel_listing(params):
    per_page = 20


    amenities_filter = [{"status": False, "label": "Parking_Facility"}, {"status": False, "label": "Seating_Area"}, {"status": False, "label": "Balcony"}, {"status": False, "label": "Attached_Bathroom"}, {"status": False, "label": "AC"}, {"status": False, "label": "Complimentary_BreakFast"}, {"status": False, "label": "Banquet_Hall"}, {"status": False, "label": "Hot_Water"}, {"status": False, "label": "Card_Payment"}, {"status": False, "label": "Kitchen"}, {
        "status": False, "label": "Washing_Machine"}, {"status": False, "label": "Swimming_Pool"}, {"status": False, "label": "Living_Room"}, {"status": False, "label": "Bottled_Water"}, {"status": False, "label": "KitPre_Book_Mealschen"}, {"status": False, "label": "Free_Wifi"}, {"status": False, "label": "Elevator"}, {"status": False, "label": "TV"}, {"status": False, "label": "Single_Bed"}, {"status": False, "label": "Queen_sized_Bed"}, {"status": False, "label": "King_sized_Bed"}, {"status": False, "label": "Geyser"}]

    accomodation_type_filter = [{"status": False, "label": "Apartment"}, {
        "status": False, "label": "EYO_Home"}, {"status": False, "label": "Hotel"}]

    collection_filter = [{"status": False, "label": "Business_Travellers"}, {"status": False, "label": "For_Group_Travellers"}, {"status": False, "label": "Family_EYOs"}, {
        "status": False, "label": "Sanitised_Stays"}, {"status": False, "label": "EYO_Welcomes_Couples"}, {"status": False, "label": "Local_ID's_Accepted"}]

    category_filter = [{"status": False, "label": "EYO Rooms", "tag": "Super affordable stays with essential amenities"}, {"status": False, "label": "Premiun", "tag": "Hotels at prime location and premium amenities"}, {"status": False, "label": "Home", "tag": "A space for new-age travellers-Serviced by EYO,Executive apartments with stylish interiors-Serviced by EYO"}, {
        "status": False, "label": "Capital O", "tag": "Budget stay with Comfortable bed and Clean washroom"}, {"status": False, "label": "Collection O", "tag": "Villas and apartments with extra space and privacy"}, {"status": False, "label": "Silver Key", "tag": "Premium hotels with spacious rooms for business travellers & families"}]

    checkin_filter = [{"status": False, "label": "Pay at Hotel"}, {
        "status": False, "label": "Pay later"}, {"status": False, "label": "Pay Online"}]

    query = "select h.id as id,h.name as name,h.images->>'$[0]' as images,h.rooms->>'$' as rooms,created_at,updated_at, h.collection->>'$[0]' as collection,c.name as category,c.tag as tag,h.accomodation_type->>'$[0]' as acc_type,h.amenities as amenities,checkin_features as c_f from hotel as h join category as c on h.category_id=c.id WHERE"

    base_query = "select h.collection->>'$[0]' as collection,c.name as category,c.tag as tag,h.accomodation_type->>'$[0]' as acc_type,h.amenities as amenities,checkin_features as c_f from hotel as h join category as c on h.category_id=c.id limit 1"
    count_query = 'select count(h.id) from hotel as h join category as c on h.category_id=c.id WHERE'

    if params.get('collections'):
        collections = params.getlist("collections")
        for item in collections:
            for col in collection_filter:
                if col['label'] == item:
                    col['status'] = True
            query = query + \
                "  h.collection->>'$[0].%s'=" % (item)+'"true"'+" AND"
            count_query = count_query + \
                "  h.collection->>'$[0].%s'=" % (item)+'"true"'+" AND"
    if params.get('category'):
        category = params.getlist("category")
        for item in category:
            for col in category_filter:
                if col['label'] == item:
                    col['status'] = True
            query = query + "  c.name='%s' AND" % (item)
            count_query = count_query + "  c.name='%s' AND" % (item)
    if params.get('accomodation_type'):
        accomodation_type = params.getlist("accomodation_type")
        for item in accomodation_type:
            for col in accomodation_type_filter:
                if col['label'] == item:
                    col['status'] = True
            query = query + \
                "  h.accomodation_type->>'$[0].%s'=" % (item)+'"true"'+" AND"
            count_query = count_query + \
                "  h.accomodation_type->>'$[0].%s'=" % (
                    item) + '"true"' + " AND"

    if params.get('amenities'):
        amenities = params.getlist("amenities")
        for item in amenities:
            for col in amenities_filter:
                if col['label'] == item:
                    col['status'] = True
            query = query + \
                "  h.amenities->>'$[0].%s'=" % (item)+'"true"'+" AND"
            count_query = count_query + \
                "  h.amenities->>'$[0].%s'=" % (item)+'"true"'+" AND"
    if params.get('checkin_features'):
        checkin_features = params.getlist("checkin_features")
        for item in checkin_features:
            for col in checkin_filter:
                if col['label'] == item:
                    col['status'] = True
            query = query + "  h.checkin_features='%s'" % (item)
            count_query = count_query + \
                "   h.checkin_features='%s'" % (item)

    query = query.strip('AND')
    query = query.strip('WHERE')

    count_query = count_query.strip('AND')
    count_query = count_query.strip('WHERE')

    if params.get('page'):
        page = params.get('page')
        offset = (int(page)-1)*per_page
        current_items = int(page)*per_page
        query = query + " Limit %d, %d" % (offset, per_page)
    else:
        query = query + " Limit %d" % (per_page)

    query = query + ';'
    count_query = count_query + ';'
    count_raw = db.engine.execute(count_query)

    for row in count_raw:
        total_results = row[0]
        total_pages = int(math.ceil((row[0]/per_page)))

    # print(query)
    data_raw = db.engine.execute(query)
    data_base = db.engine.execute(base_query)

    # print(data_raw)

    data = []
    filters = {}
    filters['amenities'] = amenities_filter
    filters['accomodation_type'] = accomodation_type_filter
    filters['collections'] = collection_filter
    filters['category'] = category_filter
    filters['checkin_features'] = checkin_filter

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
    tags = ["operated by eyo", "premium hotel", "breakfast-included"]

    for hotel in data_raw:
        temp_dict = {}
        temp_dict['hotel_id']=hotel['id']
        temp_dict['name'] = hotel['name']
        temp_dict['hotel_id'] = hotel['id']
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
        temp_dict['tags'] = tags[int(math.floor(random.random() * 3))]
        data.append(temp_dict)

    return data, total_pages, total_results, params.get('page') or 1, filters
