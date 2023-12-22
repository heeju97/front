from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    id:int
    content:str

items = ['맥북','아이폰','애플워치','아이패드']

@app.get("/items/{id}")
def read_id_item(id):
    return items[int(id)]

@app.get("/items")
def read_item(skip:int=0,limit:int=10):
    return items[skip:skip+limit]

@app.post("/items")
def post_item(item:Item):
    items.append(item.content) 
    return '성공했습니다!'