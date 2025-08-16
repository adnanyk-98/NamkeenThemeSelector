// Daskaka Theme Loader
// Include this script in your poster HTML files to automatically apply themes

(function() {
    'use strict';
    
    // Function to apply theme when poster loads
    function applyStoredTheme() {
        try {
            // Get the stored theme class
            const themeClass = localStorage.getItem('daskaka-theme-class');
            const currentTheme = localStorage.getItem('daskaka-current-theme');
            
            if (themeClass && currentTheme) {
                // Remove all existing theme classes
                document.body.classList.remove(
                    'theme-janmashtami', 'theme-diwali', 'theme-holi', 
                    'theme-navratri', 'theme-republic', 'theme-independence', 
                    'theme-christmas', 'theme-custom'
                );
                
                // Add the stored theme class
                document.body.classList.add(themeClass);
                
                // If it's a custom theme, apply custom colors
                if (currentTheme === 'custom') {
                    const customColors = localStorage.getItem('daskaka-custom-colors');
                    if (customColors) {
                        try {
                            const colors = JSON.parse(customColors);
                            // Override the CSS custom properties
                            document.documentElement.style.setProperty('--theme-primary', colors.primary);
                            document.documentElement.style.setProperty('--theme-secondary', colors.secondary);
                            document.documentElement.style.setProperty('--theme-accent', colors.accent);
                            document.documentElement.style.setProperty('--theme-background', colors.background);
                            console.log('Custom colors applied:', colors);
                        } catch (e) {
                            console.log('Error parsing custom colors:', e);
                        }
                    } else {
                        console.log('No custom colors found in localStorage');
                    }
                }
                
                console.log(`Theme "${currentTheme}" applied to poster`);
            }
        } catch (e) {
            console.log('Error applying stored theme:', e);
        }
    }
    
    // Apply theme when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyStoredTheme);
    } else {
        applyStoredTheme();
    }
    
    // Also listen for storage changes (when theme is changed in another tab)
    window.addEventListener('storage', function(e) {
        if (e.key === 'daskaka-current-theme' || e.key === 'daskaka-theme-class' || e.key === 'daskaka-custom-colors') {
            applyStoredTheme();
        }
    });
    
})();
