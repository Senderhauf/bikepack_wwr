FROM mediawiki:1.35

# use own PHP configuration file based on default production configuration
COPY ./php.ini .
RUN chmod 644 ./php.ini
RUN mv ./php.ini "$PHP_INI_DIR/php.ini"

#COPY apache2 /etc/apache2/
#RUN mv /var/www/html /var/www/wwr21
#RUN chown -R $USER:$USER /var/www/wwr21
#RUN chmod -R 755 /var/www/wwr21
#COPY extensions /var/www/wwr21/extensions/
COPY extensions /var/www/html/extensions

COPY ./install.sh /var/www/html
RUN chmod +x /var/www/html/install.sh
RUN /var/www/html/install.sh

##########################################
# install Foreground skin
RUN cd /var/www/html/skins
RUN git clone https://github.com/thingles/foreground.git
##########################################
