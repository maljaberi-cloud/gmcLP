import os
from PIL import Image

public_dir = r"c:\Users\Mustafa Ahmed\gmcLP\public"

print("Starting asset compression...")

for filename in os.listdir(public_dir):
    filepath = os.path.join(public_dir, filename)
    ext = os.path.splitext(filename)[1].lower()
    
    if ext in ['.jpg', '.jpeg', '.png']:
        orig_size = os.path.getsize(filepath)
        print(f"Processing {filename} (Original size: {orig_size / (1024*1024):.2f} MB)")
        
        try:
            with Image.open(filepath) as img:
                # 1. Resize if image is extremely large (e.g. width > 2000px)
                width, height = img.size
                max_dim = 2000
                if width > max_dim or height > max_dim:
                    if width > height:
                        new_width = max_dim
                        new_height = int(height * (max_dim / width))
                    else:
                        new_height = max_dim
                        new_width = int(width * (max_dim / height))
                    print(f"  Resizing from {width}x{height} to {new_width}x{new_height}")
                    img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
                
                # 2. Save and compress
                if ext in ['.jpg', '.jpeg']:
                    img.save(filepath, "JPEG", quality=80, optimize=True)
                elif ext == '.png':
                    # Check if it has alpha channel (transparency)
                    if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
                        # Keep as PNG and optimize
                        img.save(filepath, "PNG", optimize=True)
                    else:
                        # No transparency: we can convert to RGB and save as PNG (smaller) 
                        # or convert to palette mode if it reduces size.
                        # Let's save as PNG with optimize=True.
                        img = img.convert('RGB')
                        img.save(filepath, "PNG", optimize=True)
            
            new_size = os.path.getsize(filepath)
            reduction = (orig_size - new_size) / (1024*1024)
            print(f"  Done. New size: {new_size / (1024*1024):.2f} MB (Reduced by {reduction:.2f} MB)")
        except Exception as e:
            print(f"  Error processing {filename}: {e}")

print("Asset compression completed.")
