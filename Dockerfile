# build
FROM node:18.16-alpine as builder
WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

# Bundle static assets with nginx
FROM nginx:latest as production
ENV NODE_ENV production

# Copy built assets from `builder` image
COPY --from=builder /app/build /usr/share/nginx/html/
# Add your nginx.conf
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]

