#!/bin/bash

set -e

PROJECT_DIR="/home/ubuntu/windows-server-l2-portfolio"
WEB_DIR="/var/www/html"

echo "🚀 Starting deployment..."

echo "📁 Going to project directory..."
cd "$PROJECT_DIR"

echo "📥 Pulling latest code from GitHub..."
git pull origin main

echo "📦 Installing dependencies..."
npm install

echo "🔨 Building React application..."
npm run build

echo "🧹 Removing old website files..."
sudo rm -rf "$WEB_DIR"/*

echo "📋 Copying new build files..."
sudo cp -r dist/* "$WEB_DIR"/

echo "🔄 Restarting Nginx..."
sudo systemctl restart nginx

echo "✅ Deployment completed successfully!"