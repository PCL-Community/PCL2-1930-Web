import re
from datetime import datetime

# 1. 读取 index.html 文件内容
with open('index.html', 'r', encoding='utf-8') as file:
    content = file.read()

# 2. 查找并替换时间部分
pattern = r'<p>更新时间：(.*?)</p>'
current_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
updated_content = re.sub(pattern, f'<p>更新时间：{current_time}</p>', content)

# 3. 将更新后的内容写回到 index.html 文件
with open('index.html', 'w', encoding='utf-8') as file:
    file.write(updated_content)