from T01Menu.models import MenuItem
from T01Menu.models import Category
from django.core.management import BaseCommand

sample_data = [
    # EATERY
    MenuItem(itemName="Cheeseburger", category=Category.EATERY, description="Grilled burger with cheese, lettuce, and tomato", price=8.99, calories=750),
    MenuItem(itemName="Margherita Pizza", category=Category.EATERY, description="Classic pizza with mozzarella and basil", price=10.99, calories=800),
    MenuItem(itemName="Spaghetti Carbonara", category=Category.EATERY, description="Pasta with creamy carbonara sauce", price=12.50, calories=850),
    MenuItem(itemName="BBQ Chicken Wings", category=Category.EATERY, description="Smoky BBQ chicken wings", price=9.50, calories=700),
    MenuItem(itemName="Grilled Salmon", category=Category.EATERY, description="Salmon fillet with lemon butter sauce", price=15.99, calories=650),
    MenuItem(itemName="Tacos", category=Category.EATERY, description="Soft tacos with beef, lettuce, and cheese", price=7.99, calories=500),
    MenuItem(itemName="Veggie Burger", category=Category.EATERY, description="Vegetarian burger with lettuce, tomato, and avocado", price=9.25, calories=600),
    MenuItem(itemName="Fish and Chips", category=Category.EATERY, description="Crispy fried fish with golden fries", price=11.50, calories=900),
    MenuItem(itemName="Chicken Alfredo", category=Category.EATERY, description="Pasta with creamy Alfredo sauce and grilled chicken", price=13.50, calories=950),
    MenuItem(itemName="Beef Stroganoff", category=Category.EATERY, description="Tender beef in a creamy mushroom sauce over egg noodles", price=14.99, calories=850),
    MenuItem(itemName="Pulled Pork Sandwich", category=Category.EATERY, description="Slow-cooked pulled pork with BBQ sauce on a bun", price=10.25, calories=800),
    MenuItem(itemName="Fried Chicken", category=Category.EATERY, description="Crispy fried chicken served with mashed potatoes", price=12.75, calories=1000),
    MenuItem(itemName="Grilled Vegetable Wrap", category=Category.EATERY, description="Grilled vegetables wrapped in a tortilla with hummus", price=8.50, calories=450),
    MenuItem(itemName="Ramen", category=Category.EATERY, description="Japanese noodle soup with pork, egg, and vegetables", price=11.99, calories=600),
    MenuItem(itemName="Shrimp Scampi", category=Category.EATERY, description="Shrimp sautéed in garlic and butter, served over pasta", price=16.25, calories=700),

    
    # DRINKS
    MenuItem(itemName="Lemon Iced Tea", category=Category.DRINKS, description="Refreshing lemon-flavored iced tea", price=2.99, calories=120),
    MenuItem(itemName="Orange Juice", category=Category.DRINKS, description="Freshly squeezed orange juice", price=3.50, calories=110),
    MenuItem(itemName="Coca-Cola", category=Category.DRINKS, description="Classic fizzy cola drink", price=2.50, calories=140),
    MenuItem(itemName="Mojito Mocktail", category=Category.DRINKS, description="Minty mojito mocktail", price=4.25, calories=90),
    MenuItem(itemName="Sparkling Water", category=Category.DRINKS, description="Bubbly mineral water", price=2.00, calories=0),
    
    # SIDES
    MenuItem(itemName="French Fries", category=Category.SIDES, description="Crispy, golden fries", price=3.25, calories=300),
    MenuItem(itemName="Onion Rings", category=Category.SIDES, description="Battered and fried onion rings", price=4.00, calories=450),
    MenuItem(itemName="Mashed Potatoes", category=Category.SIDES, description="Creamy mashed potatoes with gravy", price=3.99, calories=350),
    MenuItem(itemName="Coleslaw", category=Category.SIDES, description="Crunchy coleslaw with a tangy dressing", price=2.99, calories=150),
    MenuItem(itemName="Garlic Bread", category=Category.SIDES, description="Toasted garlic bread with herbs", price=3.50, calories=250),
    
    # DESSERTS
    MenuItem(itemName="Chocolate Brownie", category=Category.DESSERTS, description="Rich chocolate brownie with walnuts", price=3.75, calories=400),
    MenuItem(itemName="Apple Pie", category=Category.DESSERTS, description="Classic apple pie with cinnamon", price=4.50, calories=350),
    MenuItem(itemName="Cheesecake", category=Category.DESSERTS, description="Creamy New York-style cheesecake", price=5.50, calories=450),
    MenuItem(itemName="Tiramisu", category=Category.DESSERTS, description="Traditional Italian coffee-flavored dessert", price=6.00, calories=500),
    MenuItem(itemName="Ice Cream Sundae", category=Category.DESSERTS, description="Vanilla ice cream with chocolate syrup and sprinkles", price=4.25, calories=300),
    
    # SALADS
    MenuItem(itemName="Caesar Salad", category=Category.SALADS, description="Crisp romaine with Caesar dressing and croutons", price=7.99, calories=250),
    MenuItem(itemName="Greek Salad", category=Category.SALADS, description="Fresh salad with feta, olives, and cucumbers", price=6.99, calories=200),
    MenuItem(itemName="Caprese Salad", category=Category.SALADS, description="Tomatoes, mozzarella, and basil drizzled with olive oil", price=8.50, calories=220),
    MenuItem(itemName="Chicken Salad", category=Category.SALADS, description="Grilled chicken over mixed greens with vinaigrette", price=9.50, calories=300),
    MenuItem(itemName="Quinoa Salad", category=Category.SALADS, description="Healthy quinoa salad with vegetables", price=8.75, calories=350),
    
    # BEVERAGES
    MenuItem(itemName="Latte", category=Category.BEVERAGES, description="Creamy coffee with steamed milk", price=4.00, calories=150),
    MenuItem(itemName="Green Smoothie", category=Category.BEVERAGES, description="Healthy smoothie with spinach, banana, and almond milk", price=5.50, calories=180),
    MenuItem(itemName="Espresso", category=Category.BEVERAGES, description="Strong black coffee", price=2.75, calories=5),
    MenuItem(itemName="Hot Chocolate", category=Category.BEVERAGES, description="Warm cocoa with whipped cream", price=3.50, calories=200),
    MenuItem(itemName="Chai Latte", category=Category.BEVERAGES, description="Spiced tea with steamed milk", price=4.25, calories=180),

]


class Command(BaseCommand):
    def handle(self, *args, **kwargs):
        MenuItem.objects.bulk_create(sample_data)
        self.stderr.write("Added Sample Data Database")

    
    
    




