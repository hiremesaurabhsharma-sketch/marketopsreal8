import os
import re

directories = [
    r'c:\satna.store\marketopsreal8\src\app\services\creative',
    r'c:\satna.store\marketopsreal8\src\app\services\ecommerce',
    r'c:\satna.store\marketopsreal8\src\app\services\overseas',
    r'c:\satna.store\marketopsreal8\src\app\services\performance',
    r'c:\satna.store\marketopsreal8\src\app\services\seo',
    r'c:\satna.store\marketopsreal8\src\app\services\webdev',
]

# The user wants blue/cyan theme. We'll replace all these colors with 'blue' or 'cyan'.
# To keep it simple, let's replace them all with 'cyan' or 'blue'. Let's use 'blue' as primary and 'cyan' as secondary.
# Actually, the user said "Blue, white". Let's replace the whole list of colors with 'blue'.
colors_to_replace = [
    'purple', 'emerald', 'indigo', 'amber', 'rose', 'pink', 'orange', 
    'yellow', 'teal', 'fuchsia', 'violet', 'lime', 'red', 'green', 'sky', 'cyan'
]

# We should be careful to only replace tailwind class prefixes.
# e.g., bg-purple-100 -> bg-blue-100
# from-orange-400 -> from-blue-400
# text-amber-500 -> text-blue-500
# shadow-emerald-500/30 -> shadow-blue-500/30

pattern = re.compile(r'\b(bg|text|from|to|via|border|shadow|ring)-(' + '|'.join(colors_to_replace) + r')-([1-9]00|50)(\/[0-9]+)?\b')

for d in directories:
    page_path = os.path.join(d, 'page.js')
    if os.path.exists(page_path):
        with open(page_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Also let's standardize the hex colors used in gradients and buttons if any.
        # performance uses from-[#03c1fc] to-[#005ea5]
        # creative uses from-[#c084fc] to-[#7e22ce]
        # Let's replace those custom hex gradients with tailwind blue ones or keep them.
        # We can just replace the specific custom hexes that are not blue/white.
        content = re.sub(r'from-\[#[0-9a-fA-F]+\]', 'from-blue-500', content)
        content = re.sub(r'to-\[#[0-9a-fA-F]+\]', 'to-blue-700', content)
        
        new_content = pattern.sub(r'\1-blue-\3\4', content)
        
        if content != new_content:
            with open(page_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {page_path}")
        else:
            print(f"No changes in {page_path}")
