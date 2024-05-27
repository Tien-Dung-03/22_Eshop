from django.shortcuts import render, redirect
from .models import CartItem
from vehicle.models import Vehicle

def view_cart(request):
	cart_items = CartItem.objects.filter(user=request.user)
	total_price = sum(item.vehicle.price * item.quantity for item in cart_items)
	return render(request, 'cart/cart.html', {'cart_items': cart_items, 'total_price': total_price})

def add_to_cart(request, vehicle_id):
    if request.method == 'POST':
        vehicle = Vehicle.objects.get(id=vehicle_id)
        cart_item, created = CartItem.objects.get_or_create(vehicle=vehicle, user=request.user)
        cart_item.quantity += 1
        cart_item.save()
        return redirect('cart:view_cart')
    else:
        return HttpResponseNotAllowed(['POST'])

def remove_from_cart(request, item_id):
	cart_item = CartItem.objects.get(id=item_id)
	cart_item.delete()
	return redirect('cart:view_cart')