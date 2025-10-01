# api/views.py
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def saludo_test(request):
    """Endpoint simple para verificar la conexion."""
    data = {
        'mensaje': 'Hola desde Django API (Python 3.13.3) 👋',
        'status': 'Backend OK',
        'detalles': 'La configuracion de DRF y CORS parece correcta.'
    }
    return Response(data)
