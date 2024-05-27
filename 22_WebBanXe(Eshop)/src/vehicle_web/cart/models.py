from django.db import models
from user.models import User
from vehicle.models import Vehicle

class CartItem(models.Model):
	vehicle = models.ForeignKey(Vehicle, on_delete=models.CASCADE)
	quantity = models.PositiveIntegerField(default=0)
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	date_added = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return f'{self.quantity} x {self.vehicle.name}'