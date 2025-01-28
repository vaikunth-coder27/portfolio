from flask import Flask, render_template
from flask_assets import Environment, Bundle

app = Flask(__name__)
assets = Environment(app)

# Bundle CSS and JS files
css = Bundle('css/style.css', output='gen/style.css')
js = Bundle('js/main.js', output='gen/main.js')

assets.register('css', css)
assets.register('js', js)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

if __name__ == '__main__':
    app.run(debug=True)