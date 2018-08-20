# Import flask and template operators
from flask import Flask, render_template, request
from os import listdir, path
from json import dumps


def create_app(config_filename):
    # Define the WSGI application object
    app = Flask(__name__, static_folder="static", template_folder="static")

    # Configurations
    app.config.from_object(config_filename)

    @app.route('/')
    def index():
    	return render_template('index.html')

    @app.route('/project/names')
    def getProjectNames():
        subDir = request.args.get('type')
        if subDir is not None:
            projects = listdir("./app/static/content/" + subDir)
            return dumps(projects)

    return app

