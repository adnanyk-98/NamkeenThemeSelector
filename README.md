# 🎨 Daskaka Poster Theme Manager

A powerful web-based theme management system for creating and customizing beautiful posters with multiple festival themes.

## 🚀 Features

- **Multiple Pre-built Themes**: Janmashtami, Diwali, Holi, Navratri, Republic Day, Independence Day, Christmas
- **Live Theme Switching**: Instantly switch between themes with real-time preview
- **Custom Color Picker**: Modify primary, secondary, accent, and background colors
- **CSS Editor**: Add custom CSS for advanced styling
- **Export Functionality**: Download themes as JSON or CSS files
- **Responsive Design**: Works on desktop and mobile devices

## 📁 File Structure

```
Daskaka/
├── index.html          # Main theme manager interface
├── styles.css          # Common poster styles
├── themes.css          # Theme definitions
├── poster1.html        # Poster with products 1-8 (4 columns)
├── poster2.html        # Poster with products 9-14 (3 columns)
├── poster3.html        # Poster with products 15-20 (3 columns)
└── README.md           # This file
```

## 🎯 How to Use

### 1. **Open Theme Manager**
- Open `index.html` in your web browser
- This gives you access to the complete theme management system

### 2. **Select a Theme**
- Choose from 8 pre-built themes:
  - **Janmashtami** (Default): Krishna blue, peacock green, gold
  - **Diwali**: Red, orange, gold with diya and rangoli elements
  - **Holi**: Pink, purple, green with color powder effects
  - **Navratri**: Purple, orange, pink with garba elements
  - **Republic Day**: Indian flag colors with Ashoka Chakra
  - **Independence Day**: Saffron, white, green theme
  - **Christmas**: Red, green, gold with tree and snow
  - **Custom**: User-defined colors

### 3. **Customize Colors**
- Use the color picker to modify:
  - **Primary Color**: Main theme color
  - **Secondary Color**: Supporting color
  - **Accent Color**: Highlight color
  - **Background Color**: Card background

### 4. **Add Custom CSS**
- Use the CSS editor for advanced styling
- Write custom CSS rules to override default styles
- Click "Apply CSS" to see changes instantly

### 5. **Preview and Export**
- See live preview of your theme changes
- Export theme as JSON file for backup
- Download custom CSS for use in other projects

## 🌐 Deployment

### **Local Development**
Simply open `index.html` in your browser. All files are self-contained.

### **Web Server Deployment**
Upload all files to any web server:
- **GitHub Pages**: Free hosting for public repositories
- **Netlify**: Drag & drop deployment
- **Vercel**: Modern deployment platform
- **Traditional Hosting**: Any web hosting service

### **Benefits of Server Deployment**
- Access from anywhere with internet
- Share themes with team members
- No need to download or install anything
- Instant theme switching and customization

## 🎨 Theme Customization

### **Color Variables**
Each theme uses CSS custom properties:
```css
:root {
  --theme-primary: #1e3a8a;      /* Main color */
  --theme-secondary: #059669;     /* Secondary color */
  --theme-accent: #f59e0b;       /* Accent color */
  --theme-background: #fffaf9;   /* Background color */
}
```

### **Background Elements**
Themes include decorative background elements:
- **Janmashtami**: Mor pankh, matka, flute, crown, divine light
- **Diwali**: Diya, rangoli, fireworks, light rays
- **Holi**: Color powder splashes
- **Navratri**: Garba circles, dandiya sticks

## 📱 Responsive Design

- **Desktop**: Full theme manager with side-by-side panels
- **Mobile**: Stacked layout for easy mobile use
- **Posters**: Automatically scale to fit screen size

## 🔧 Technical Details

- **Pure HTML/CSS/JavaScript**: No frameworks required
- **CSS Custom Properties**: Modern CSS for theme switching
- **html2canvas**: PNG export functionality
- **Google Fonts**: Poppins font family
- **CSS Grid & Flexbox**: Modern layout techniques

## 🚀 Quick Start

1. **Open** `index.html` in your browser
2. **Select** a theme from the theme selector
3. **Customize** colors using the color picker
4. **Preview** changes in real-time
5. **Export** your custom theme
6. **View** individual posters: poster1.html, poster2.html, poster3.html

## 💡 Tips

- **Save Themes**: Export themes as JSON for backup
- **Custom CSS**: Use the CSS editor for advanced styling
- **Color Harmony**: Use complementary colors for best results
- **Export Quality**: Posters export as high-quality PNG files
- **Theme Switching**: Switch themes instantly without page reload

## 🎉 Ready to Use!

Your Daskaka Poster Theme Manager is now ready! Open `index.html` and start creating beautiful, customized posters for any occasion.

---

**Created with ❤️ for Daskaka - Making poster creation easy and beautiful!**
