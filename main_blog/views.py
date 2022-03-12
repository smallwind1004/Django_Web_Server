from django.shortcuts import render
# from django.http import HttpResponse

# Create your views here.
def main_blog(request):
    context = {'x': 10, 'y': 20}
    return render(request, 'main_blog/my_blog.html', context)

def about(request):
    return render (request, 'main_blog/about.html')