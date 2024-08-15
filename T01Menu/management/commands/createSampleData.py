from T01Menu.models import MenuItem
from T01Menu.models import Category
from django.core.management import BaseCommand

sample_data = [
    MenuItem(itemName="Burger", category=Category.EATERY, description="Juicy grilled burger with cheese", price=8.99, calories=700),
    MenuItem(itemName="Pizza", category=Category.EATERY, description="Pepperoni pizza with mozzarella", price=12.50, calories=900),
    MenuItem(itemName="Coke", category=Category.DRINKS, description="Refreshing cola drink", price=2.50, calories=150),
    MenuItem(itemName="Fries", category=Category.SIDES, description="Crispy golden fries", price=3.00, calories=350),
    MenuItem(itemName="Salad", category=Category.SIDES, description="Fresh garden salad with dressing", price=4.50, calories=200),
    MenuItem(itemName="Pasta", category=Category.EATERY, description="Creamy Alfredo pasta with chicken", price=10.99, calories=800),
    MenuItem(itemName="Lemonade", category=Category.DRINKS, description="Homemade lemonade", price=3.25, calories=120),
    MenuItem(itemName="Ice Cream", category=Category.SIDES, description="Vanilla ice cream with chocolate syrup", price=3.99, calories=250),
    MenuItem(itemName="Steak", category=Category.EATERY, description="Grilled ribeye steak", price=18.75, calories=1000),
    MenuItem(itemName="Soda", category=Category.DRINKS, description="Fizzy orange soda", price=2.50, calories=160),
    MenuItem(itemName="Tacos", category=Category.EATERY, description="Spicy beef tacos with salsa", price=7.50, calories=600),
    MenuItem(itemName="Tea", category=Category.DRINKS, description="Hot brewed tea", price=2.00, calories=50),
    MenuItem(itemName="Mozzarella Sticks", category=Category.SIDES, description="Fried mozzarella sticks with marinara", price=5.25, calories=400),
    MenuItem(itemName="Chicken Wings", category=Category.EATERY, description="Spicy chicken wings", price=9.00, calories=750),
    MenuItem(itemName="Milkshake", category=Category.DRINKS, description="Thick strawberry milkshake", price=4.50, calories=500),
    MenuItem(itemName="Garlic Bread", category=Category.SIDES, description="Toasted garlic bread", price=2.75, calories=300),
    MenuItem(itemName="Fish and Chips", category=Category.EATERY, description="Fried fish with crispy chips", price=11.50, calories=850),
    MenuItem(itemName="Coffee", category=Category.DRINKS, description="Hot brewed coffee", price=2.75, calories=5),
    MenuItem(itemName="Nachos", category=Category.SIDES, description="Cheesy nachos with jalapenos", price=6.50, calories=450),
    MenuItem(itemName="Lasagna", category=Category.EATERY, description="Classic beef lasagna", price=13.00, calories=950),
]

class Command(BaseCommand):
    def handle(self, *args, **kwargs):
        MenuItem.objects.bulk_create(sample_data)
        self.stderr.write("Added Sample Data Database")

    
    
    