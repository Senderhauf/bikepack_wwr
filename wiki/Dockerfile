FROM mediawiki:1.35

# use own PHP configuration file based on default production configuration
COPY ./php.ini .
RUN chmod 644 ./php.ini
RUN mv ./php.ini "$PHP_INI_DIR/php.ini"

ADD extensions /var/www/html/extensions/

COPY ./install.sh .
RUN chmod +x ./install.sh
RUN ./install.sh

