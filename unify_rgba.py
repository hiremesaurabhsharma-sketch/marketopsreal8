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

for d in directories:
    page_path = os.path.join(d, 'page.js')
    if os.path.exists(page_path):
        with open(page_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Replace any rgba(R,G,B,A) with blue/cyan ones
        # For variety, we'll replace the first one with cyan and second with blue, or just make them all cyan
        # Let's replace any rgba(..., ..., ..., 0.15) with rgba(6,182,212,0.15)
        # But wait, there might be other alphas. 
        # Let's just blindly replace the rgb part if it matches any non-blue/cyan ones?
        # Actually it's easier to just regex replace `rgba\(\d+,\s*\d+,\s*\d+,` with `rgba(14,165,233,` (Tailwind Sky 500)
        # But we shouldn't touch `rgba(0,0,0,...` which is for shadows!
        # Let's use a regex to match rgba where R > 0 or G > 0 or B > 0.
        
        def replace_rgba(match):
            r, g, b = int(match.group(1)), int(match.group(2)), int(match.group(3))
            if r == 0 and g == 0 and b == 0:
                return match.group(0) # Keep black
            if r == 255 and g == 255 and b == 255:
                return match.group(0) # Keep white
            # Replace with cyan (6,182,212)
            return f"rgba(6,182,212,"
            
        new_content = re.sub(r'rgba\((\d+),\s*(\d+),\s*(\d+),', replace_rgba, content)
        
        if content != new_content:
            with open(page_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {page_path}")
        else:
            print(f"No changes in {page_path}")
