from app.main import create_app
import os


app = create_app(os.getenv('FLASK_ENV') or 'dev')


@app.route("/")
def Home():
    return "Home"


if __name__ == "__main__":
    app.run()
