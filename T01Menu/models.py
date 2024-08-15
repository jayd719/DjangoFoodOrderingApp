from django.db import models
from django.utils.translation import gettext_lazy as _

class Category(models.TextChoices):
    EATERY = "ER", _("Eatery")
    DRINKS = "DR", _("Drink")
    SIDES = "SD", _("Sides")
    UNKNOW = "U", _("Unknow")


class MenuItem(models.Model):
    itemName = models.CharField(max_length=20)
    category = models.CharField(max_length=2,choices=Category.choices,default=Category.UNKNOW)
    description = models.TextField(max_length=200)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    calories = models.IntegerField()
    



    def __str__(self):
        return self.itemName
    
    def getDetails(self):
        return f'''Item: {self.itemName}
Category :{self.category}
Description: {self.description}
Price: {self.price}
Calories: {self.price}
'''+"-"*20
    