from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, "home/index.html")

def login_page(request):
    return render(request, 'user/login.html')