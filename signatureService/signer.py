from pyfva.clientes.sellador import ClienteSellador
import warnings
import os

def sing(signatureData):
  stampclient = ClienteSellador(negocio=2,entidad=1)
  if stampclient.validar_servicio():
    ARCH = signatureData['file']
    HASH =  signatureData['docHash']
    data = stampclient.firme(ARCH, signatureData['docType'], signatureData['hashAlgorithm'], hash_doc=HASH, id_funcionalidad=-1, lugar=signatureData['location'], razon=signatureData['reason'])
    return data
  else:
    warnings.warn("Firmador BCCR No disponible", RuntimeWarning)
    data = stampclient.DEFAULT_ERROR
