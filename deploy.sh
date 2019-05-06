#!/bin/sh

rsync -auvp *.svg ftp.icsb.chalmers.se:/home/"$(whoami)"/maps/
ssh -t ftp.icsb.chalmers.se "sudo mv /home/"$(whoami)"/maps/*.svg /var/www/html/.maps/human1/"
