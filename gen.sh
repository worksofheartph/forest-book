openssl req -x509 -newkey rsa:4096 -days 365 -keyout aff-key.pem -out aff-cert.pem

echo "CA's self-signed certificate"
openssl x509 -in aff-cert.pem -nout-text
