# -*- coding: utf-8 -*-
"""
Created on Sun Jan 19 11:13:47 2025

@author: hp5cd
"""

import os

# Define the order of pages to merge
files_to_merge = ["page.html", "about.html", "projects.html", "skills.html"]

# Output file
output_file = "combined.html"

with open(output_file, "w") as outfile:
    for file in files_to_merge:
        with open(file, "r") as infile:
            content = infile.read()

            # Remove <html>, <head>, and <body> tags for subpages
            if file != "index.html":
                content = content.replace("<html>", "").replace("</html>", "")
                content = content.replace("<head>", "").replace("</head>", "")
                content = content.replace("<body>", "").replace("</body>", "")

            outfile.write(content + "\n")

print(f"Merged content written to {output_file}")
