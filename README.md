**Install**
  * sudo apt update
  * sudo apt install nginx -y

---

**Edit NGINX server section**
  * sudo nano /etc/nginx/sites-available/default

  * server {
    listen 8080 default_server;
    listen [::]:8080 default_server;

    server_name _;

    location / {
        proxy_pass https://example.com;
        proxy_set_header Host example.com;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

**Test and restart  NGINX**
  * sudo nginx -t
  * sudo service nginx restart

**Get your proxy URL in Codespaces**
  * Forward a port or run npm install express and then node server.js