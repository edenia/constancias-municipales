from pyfva.clientes.sellador import ClienteSellador
import warnings
import hashlib
import base64

def get_digest(digest_name):
  if 'sha256' == digest_name:
    return hashlib.sha256()
  elif 'sha384' == digest_name:
    return hashlib.sha384()
  elif 'sha512' == digest_name:
    return hashlib.sha512()

def get_hash_sum(data, algorithm, b64=False):
  if type(data) == str:
    data = data.encode()
  digest = get_digest(algorithm)
  digest.update(data)
  if b64:
    return base64.b64encode(digest.digest()).decode()
  hashsum = digest.hexdigest()
  return hashsum


def sing():
  stampclient = ClienteSellador(negocio=2,entidad=1)

  if stampclient.validar_servicio():
    with open('/home/edenia/CertificadosCopy/sellador firma digital.pdf', 'rb') as arch:
      FI = arch.read()
      ARCH = base64.b64encode(FI).decode()
      HASH = get_hash_sum(FI, 'sha512', b64=True)
      # data = stampclient.firme(ARCH, 'pdf', hash_doc=HASH, lugar="un lugar", razon="una razon")
      data = stampclient.firme(ARCH, 'pdf', algoritmo_hash='Sha512', hash_doc=HASH, id_funcionalidad=-1, lugar="Limon", razon="Prueba")
      print(data)
      return data
  else:
    warnings.warn("Firmador BCCR No disponible", RuntimeWarning)
    data = stampclient.DEFAULT_ERROR
