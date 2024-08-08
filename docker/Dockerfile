FROM node:22.5-slim

WORKDIR /var/www/html

ENV TZ="Asia/Tokyo"

RUN \
    apt-get update ; \
    apt-get install -y --no-install-recommends \
        ca-certificates \
        sudo \
    ; \
    apt-get clean; \
    rm -rf /var/lib/apt/lists/*

RUN \
    echo "node ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

COPY ./docker/bin/containerStart.sh /usr/local/bin/containerStart.sh

RUN chmod +x /usr/local/bin/containerStart.sh

USER node

CMD ["/bin/bash", "-c", "/usr/local/bin/containerStart.sh"]
