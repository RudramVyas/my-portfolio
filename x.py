# Replace 'filename.txt' with the path to your local file


files = [ 
    '../Desktop/my-portfolio/index.html',
    '../Desktop/my-portfolio/experience.html',
    '../Desktop/my-portfolio/projects.html',
    '../Desktop/my-portfolio/skills-education.html',
    '../Desktop/my-portfolio/contact.html',
    '../Desktop/my-portfolio/assets/css/style.css',
    '../Desktop/my-portfolio/assets/js/main.js'
]

file_names = [ 
    "index.html", 
    "experience.html", 
    "projects.html", 
    "skills-education.html", 
    "contact.html", 
    "style.css", 
    "main.js" 
]

print("New files. Please acknoledge once you read them.")
# print("I will give you all the files in my portfolio. go through each and have those in mind. Once you read all tell me 'got it' to acknoledge the fact!")
print()
# Open the file in read mode and print its contents
for i,file in enumerate(files):
    print("----------------------------------")
    print(file_names[i])
    print("----------------------------------")
    print()
    print()
    with open(file, 'r') as f:
        contents = f.read()
        print(contents)
print("The Project structure is :")

# │   ├── css
# │   |   ├── style.css
# │   ├── js
# │   |   ├── main.js

print("""
├── assets/
│   ├── favicon.svg
│   ├── profile-photo.jpg
│   ├── bg.svg
│   ├── hero-bg.jpg
├── index.html
├── experience.html
├── projects.html
├── skills-education.html
├── contact.html
├── README.md
├── sitemap.xml
""")

print()
# print("Now through this chat help me design this website.") 
# print("I will keep updating you with the latest files, remeber the latest one. When I ask for a change, give full cde for all the files")

