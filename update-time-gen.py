# -*- coding: utf-8 -*-
import re
from datetime import datetime

# 1. 读取 index.html 文件内容
with open('index.html', 'r', encoding='utf-8') as file:
    content = file.read()

# 2. 查找并替换时间部分
pattern = r'最近更新时间：\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}'
current_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
updated_content = re.sub(pattern, f'最近更新时间：{current_time}', content, count=1)
print(f'更新时间为：{current_time}')

# 3. 将更新后的内容写回到 index.html 文件
with open('index.html', 'w', encoding='utf-8') as file:
    file.write(updated_content)