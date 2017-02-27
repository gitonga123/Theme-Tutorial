{
    # Theme information
    'name': "Theme Tutorial",
    'description': """
        Learning Odoo Theme Builder
    """,
    'category': 'Theme/Creative',
    'version': '1.0',
    'depends': ['website'],

    # templates
    'data': [
        'views/options.xml',
        'views/snippets.xml',
        'views/assets.xml',
        'views/page.xml',
        'views/learn.xml',
    ],

    # demo pages
    'demo': [
        'demo/pages.xml',
    ],

    # Your information
    'author': "Daniel Mutwiri",
    'website': "www.otbafrica.com",
}