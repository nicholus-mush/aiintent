// Security and authentication state
        const authState = {
            isAuthenticated: false,
            username: null,
            userData: null
        };

        // Application state
        const state = {
            entries: [],
            currentMonth: 1,
            editingEntryId: null,
            selectedRating: 0,
            lastSavedDate: null,
            autoSaveInterval: null,
            geminiApiKey: null,
            isAiEnabled: false
        };

        // Monthly plan data with knowledge sources
        const monthlyPlans = {
            1: {
                title: "Month 1: Mental Reprogramming",
                theme: "Mental Reprogramming (The Foundation)",
                goal: "Deconstruct mental biases and rebuild clarity",
                habits: [
                    "Read: Thinking, Fast and Slow & Meditations",
                    "Identify 3 daily assumptions and question them",
                    "Journal: 'What truth did I resist today?'"
                ],
                sources: [
                    "Thinking, Fast and Slow - Daniel Kahneman",
                    "Meditations - Marcus Aurelius",
                    "The Art of Thinking Clearly - Rolf Dobelli",
                    "Online: Critical Thinking courses"
                ],
                challenge: "7-day 'No Emotion Decision' challenge — respond only with logic"
            },
            2: {
                title: "Month 2: Focus & Discipline",
                theme: "Focus & Discipline (The Forge)",
                goal: "Build deep work habits and mental toughness",
                habits: [
                    "Read: Deep Work by Cal Newport",
                    "2 hours/day of uninterrupted focus on one skill",
                    "Remove distractions (social media detox)"
                ],
                sources: [
                    "Deep Work - Cal Newport",
                    "The Power of Habit - Charles Duhigg",
                    "Atomic Habits - James Clear",
                    "Online: Pomodoro technique resources"
                ],
                challenge: "Go one full day without multitasking"
            },
            3: {
                title: "Month 3: Memory & Learning",
                theme: "Memory, Learning & Speed (The Accelerator)",
                goal: "Learn anything faster and remember it longer",
                habits: [
                    "Read: Make It Stick & Ultralearning",
                    "Use Feynman technique 3x/week",
                    "Build your 'Second Brain' in Notion/Obsidian"
                ],
                sources: [
                    "Make It Stick - Peter Brown",
                    "Ultralearning - Scott Young",
                    "A Mind for Numbers - Barbara Oakley",
                    "Online: Spaced repetition apps (Anki)"
                ],
                challenge: "Learn one hard concept in 3 days and teach it simply"
            },
            4: {
                title: "Month 4: Systems Thinking",
                theme: "Systems Thinking (The Pattern Seer)",
                goal: "Think like a systems architect, not a task follower",
                habits: [
                    "Read: Thinking in Systems by Donella Meadows",
                    "Break 1 real-world problem/week into causes & effects",
                    "Map feedback loops in systems you encounter"
                ],
                sources: [
                    "Thinking in Systems - Donella Meadows",
                    "The Fifth Discipline - Peter Senge",
                    "Complexity: A Guided Tour - Melanie Mitchell",
                    "Online: Systems thinking visualizations"
                ],
                challenge: "Build a flowchart showing a complex system"
            },
            5: {
                title: "Month 5: Emotional Mastery",
                theme: "Emotional Mastery (The Calm Strategist)",
                goal: "Stay calm, persuasive, and unshaken under pressure",
                habits: [
                    "Read: The Laws of Human Nature & Emotional Intelligence 2.0",
                    "Practice emotional logging — identify triggers",
                    "Observe people quietly for 10 minutes/day"
                ],
                sources: [
                    "The Laws of Human Nature - Robert Greene",
                    "Emotional Intelligence 2.0 - Travis Bradberry",
                    "The Subtle Art of Not Giving a F*ck - Mark Manson",
                    "Online: Meditation and mindfulness apps"
                ],
                challenge: "1 week without reacting emotionally to criticism"
            },
            6: {
                title: "Month 6: Communication & Influence",
                theme: "Communication & Influence (The Wordsmith)",
                goal: "Communicate ideas that move people and command respect",
                habits: [
                    "Read: How to Win Friends & Influence People",
                    "Summarize complex concepts in 60 seconds",
                    "Practice active listening & mirroring"
                ],
                sources: [
                    "How to Win Friends & Influence People - Dale Carnegie",
                    "Influence: The Psychology of Persuasion - Robert Cialdini",
                    "Crucial Conversations - Patterson et al.",
                    "Online: Toastmasters or public speaking courses"
                ],
                challenge: "Convince someone using only logic & empathy"
            },
            7: {
                title: "Month 7: Technical Power",
                theme: "Technical Power (The Creator)",
                goal: "Become technically dangerous — build anything",
                habits: [
                    "Code daily (1 hr min) on real projects",
                    "Study Python Advanced + Django + AI",
                    "Read: Automate the Boring Stuff with Python"
                ],
                sources: [
                    "Automate the Boring Stuff with Python - Al Sweigart",
                    "Fluent Python - Luciano Ramalho",
                    "Deep Learning with Python - François Chollet",
                    "Online: GitHub repositories, coding challenges"
                ],
                challenge: "Build an AI-driven web app"
            },
            8: {
                title: "Month 8: Strategic Thinking",
                theme: "Strategic Thinking (The Tactician)",
                goal: "Think like a grandmaster — predict outcomes",
                habits: [
                    "Read: The Prince, Superforecasting, Principles",
                    "Plan 3 alternative futures for projects",
                    "Play strategy games (Chess, Go, StarCraft)"
                ],
                sources: [
                    "The Prince - Niccolò Machiavelli",
                    "Superforecasting - Philip Tetlock",
                    "Principles - Ray Dalio",
                    "Online: Strategy game platforms, forecasting tournaments"
                ],
                challenge: "Predict event outcomes weekly — track accuracy"
            },
            9: {
                title: "Month 9: Creativity & Innovation",
                theme: "Creativity & Innovation (The Inventor)",
                goal: "Turn intelligence into originality",
                habits: [
                    "Read: Steal Like an Artist & Range",
                    "Combine 2 unrelated ideas into 1 project",
                    "Journal: 'What's accepted but might be false?'"
                ],
                sources: [
                    "Steal Like an Artist - Austin Kleon",
                    "Range - David Epstein",
                    "The War of Art - Steven Pressfield",
                    "Online: Creative challenges, innovation blogs"
                ],
                challenge: "Create a prototype or blog about a unique idea"
            },
            10: {
                title: "Month 10: Leadership & Psychology",
                theme: "Leadership & Psychology (The Observer)",
                goal: "Influence through wisdom, not control",
                habits: [
                    "Read: Leaders Eat Last by Simon Sinek",
                    "Observe group dynamics — who leads, who follows",
                    "Practice empathy — understand others' motives"
                ],
                sources: [
                    "Leaders Eat Last - Simon Sinek",
                    "The 48 Laws of Power - Robert Greene",
                    "Drive: The Surprising Truth About What Motivates Us - Daniel Pink",
                    "Online: Leadership podcasts, psychology studies"
                ],
                challenge: "Mediate a conflict or guide someone's decision"
            },
            11: {
                title: "Month 11: Synthesis & Legacy",
                theme: "Synthesis & Legacy (The Architect)",
                goal: "Build something that reflects your dangerous intelligence",
                habits: [
                    "Review all notes, journals, and insights",
                    "Work on final project fusing all skills",
                    "Write: 'My Philosophy of Intelligent Living'"
                ],
                sources: [
                    "Your own journal entries and notes",
                    "Zero to One - Peter Thiel",
                    "The Beginning of Infinity - David Deutsch",
                    "Online: Project management tools, portfolio sites"
                ],
                challenge: "Create a system/product fusing logic, emotion, creativity"
            },
            12: {
                title: "Month 12: Silence & Mastery",
                theme: "Silence & Mastery (The Shadow Phase)",
                goal: "Become calm, calculated, and visionary",
                habits: [
                    "15 min meditation daily",
                    "Journal: 'What do I now see that I couldn't before?'",
                    "Practice silence — observe without reacting"
                ],
                sources: [
                    "Your accumulated wisdom",
                    "The Book of Five Rings - Miyamoto Musashi",
                    "The Tao Te Ching - Lao Tzu",
                    "Online: Advanced meditation resources"
                ],
                challenge: "Teach someone the principles of intelligence"
            }
        };
        // DOM Elements
        const elements = {
            // Authentication
            loginContainer: document.getElementById('loginContainer'),
            appContainer: document.getElementById('appContainer'),
            usernameInput: document.getElementById('username'),
            passwordInput: document.getElementById('password'),
            loginBtn: document.getElementById('loginBtn'),
            setupNote: document.getElementById('setupNote'),
            logoutBtn: document.getElementById('logoutBtn'),
            userName: document.getElementById('userName'),
            userStatus: document.getElementById('userStatus'),
            
            // AI Elements
            aiSuggestBtn: document.getElementById('aiSuggestBtn'),
            aiInsights: document.getElementById('aiInsights'),
            aiContent: document.getElementById('aiContent'),
            apiKeyInput: document.getElementById('apiKeyInput'),
            saveApiKeyBtn: document.getElementById('saveApiKeyBtn'),
            apiStatusIndicator: document.getElementById('apiStatusIndicator'),
            apiStatusText: document.getElementById('apiStatusText'),
            fullAnalysisBtn: document.getElementById('fullAnalysisBtn'),
            fullAnalysisContent: document.getElementById('fullAnalysisContent'),
            archiveAnalysisBtn: document.getElementById('archiveAnalysisBtn'),
            progressAnalysisBtn: document.getElementById('progressAnalysisBtn'),
            
            // Security page
            displayUsername: document.getElementById('displayUsername'),
            accountCreated: document.getElementById('accountCreated'),
            lastLogin: document.getElementById('lastLogin'),
            changePasswordBtn: document.getElementById('changePasswordBtn'),
            exportDataBtn: document.getElementById('exportDataBtn'),
            resetDataBtn: document.getElementById('resetDataBtn'),
            
            // Pages
            journalPage: document.getElementById('journal-page'),
            archivePage: document.getElementById('archive-page'),
            progressPage: document.getElementById('progress-page'),
            aiPage: document.getElementById('ai-page'),
            securityPage: document.getElementById('security-page'),
            
            // Navigation
            navTabs: document.querySelectorAll('.nav-tab'),
            
            // Journal page elements
            journalForm: document.getElementById('journalForm'),
            journalEntries: document.getElementById('journalEntries'),
            emptyState: document.getElementById('emptyState'),
            skipDayBtn: document.getElementById('skipDayBtn'),
            autoSaveIndicator: document.getElementById('autoSaveIndicator'),
            currentDate: document.getElementById('currentDate'),
            
            // Stats elements
            totalEntries: document.getElementById('totalEntries'),
            currentStreak: document.getElementById('currentStreak'),
            completionRate: document.getElementById('completionRate'),
            daysRemaining: document.getElementById('daysRemaining'),
            
            // Monthly plan elements
            monthTitle: document.getElementById('monthTitle'),
            monthTheme: document.getElementById('monthTheme'),
            monthGoal: document.getElementById('monthGoal'),
            habitsList: document.getElementById('habitsList'),
            sourcesList: document.getElementById('sourcesList'),
            monthChallenge: document.getElementById('monthChallenge'),
            prevMonthBtn: document.getElementById('prevMonthBtn'),
            nextMonthBtn: document.getElementById('nextMonthBtn'),
            
            // Progress elements
            progressPercent: document.getElementById('progressPercent'),
            progressFill: document.getElementById('progressFill'),
            
            // Archive page elements
            searchInput: document.getElementById('searchInput'),
            monthFilter: document.getElementById('monthFilter'),
            focusFilter: document.getElementById('focusFilter'),
            ratingFilter: document.getElementById('ratingFilter'),
            entriesFound: document.getElementById('entriesFound'),
            averageRating: document.getElementById('averageRating'),
            mostActiveMonth: document.getElementById('mostActiveMonth'),
            archiveResults: document.getElementById('archiveResults'),
            
            // Progress page elements
            progressTotalEntries: document.getElementById('progressTotalEntries'),
            progressCompletion: document.getElementById('progressCompletion'),
            progressAvgRating: document.getElementById('progressAvgRating'),
            progressBestMonth: document.getElementById('progressBestMonth'),
            monthlyPerformance: document.getElementById('monthlyPerformance'),
            
            // Notification
            notification: document.getElementById('notification')
        };

        // Form elements
        const formElements = {
            focus: document.getElementById('entryFocus'),
            study: document.getElementById('entryStudy'),
            insights: document.getElementById('entryInsights'),
            practice: document.getElementById('entryPractice'),
            reflection: document.getElementById('entryReflection')
        };

        // Initialize the application
        function init() {
            setupEventListeners();
            checkFirstTimeSetup();
        }

        // Set up event listeners
        function setupEventListeners() {
            // Authentication
            elements.loginBtn.addEventListener('click', handleLogin);
            elements.logoutBtn.addEventListener('click', handleLogout);
            elements.passwordInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') handleLogin();
            });
            
            // AI Features
            elements.aiSuggestBtn.addEventListener('click', getAiSuggestions);
            elements.saveApiKeyBtn.addEventListener('click', saveApiKey);
            elements.fullAnalysisBtn.addEventListener('click', generateFullAnalysis);
            elements.archiveAnalysisBtn.addEventListener('click', generateArchiveAnalysis);
            elements.progressAnalysisBtn.addEventListener('click', generateProgressAnalysis);
            
            // Security page
            elements.changePasswordBtn.addEventListener('click', changePassword);
            elements.exportDataBtn.addEventListener('click', exportData);
            elements.resetDataBtn.addEventListener('click', resetData);
            
            // Navigation
            elements.navTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    const pageId = tab.dataset.page;
                    switchPage(pageId);
                    
                    // Update active tab
                    elements.navTabs.forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
                });
            });
            
            // Journal page
            elements.skipDayBtn.addEventListener('click', skipDay);
            elements.prevMonthBtn.addEventListener('click', previousMonth);
            elements.nextMonthBtn.addEventListener('click', nextMonth);
            
            // Rating buttons
            document.querySelectorAll('.rating-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    document.querySelectorAll('.rating-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    state.selectedRating = parseInt(btn.dataset.rating);
                    autoSaveEntry();
                });
            });
            
            // Form inputs for auto-save
            Object.values(formElements).forEach(element => {
                if (element.tagName === 'TEXTAREA' || element.tagName === 'SELECT') {
                    element.addEventListener('input', autoSaveEntry);
                    element.addEventListener('change', autoSaveEntry);
                }
            });
            
            // Archive page
            elements.searchInput.addEventListener('input', performSearch);
            elements.monthFilter.addEventListener('change', performSearch);
            elements.focusFilter.addEventListener('change', performSearch);
            elements.ratingFilter.addEventListener('change', performSearch);
        }

        // Gemini AI Integration Functions
        // Gemini AI Integration Functions
        async function callGeminiAPI(prompt) {
                if (!state.geminiApiKey) {
                    throw new Error('Gemini API key not configured');
                }

                try {
                    const response = await fetch(
                        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${state.geminiApiKey}`,
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                              contents: [
                                  {
                                     parts: [{ text: prompt }]
                                  }
                            ]
                        })
                    }
                );

                if (!response.ok) {
                    const err = await response.json().catch(() => ({}));
                    throw new Error(`API request failed ${response.status}: ${JSON.stringify(err)}`);
                }

                const data = await response.json();

                return (
                    data.candidates?.[0]?.content?.parts?.[0]?.text ||
                    "No response from Gemini"
               );

            } catch (error) {
                console.error('Gemini API Error:', error);
                throw error;
           }
       }

        // Get AI suggestions for current journal entry
        async function getAiSuggestions() {
            if (!state.isAiEnabled) {
                showNotification('Please configure your Gemini API key first', 'error');
                switchPage('ai');
                return;
            }

            const currentFocus = formElements.focus.value;
            const currentPlan = monthlyPlans[state.currentMonth];
            
            elements.aiInsights.style.display = 'block';
            elements.aiContent.innerHTML = `
                <div class="ai-loading">
                    <div class="spinner"></div>
                    <span>Gemini AI is analyzing your journal and generating suggestions...</span>
                </div>
            `;

            try {
                const prompt = `
                You are an expert mentor guiding someone through a 1-year "dangerous intelligence" transformation program.
                
                Current Month Focus: ${currentPlan.theme}
                Monthly Goal: ${currentPlan.goal}
                Current Daily Focus: ${getFocusLabel(currentFocus)}
                
                Based on this context, provide:
                1. 2-3 specific suggestions for today's journal entry that align with the monthly theme
                2. 1 challenging thought exercise related to the focus area
                3. 1 practical action they can take today to advance their intelligence development
                
                Keep the response concise, practical, and focused on actionable insights. Format with clear sections.
                `;

                const aiResponse = await callGeminiAPI(prompt);
                elements.aiContent.innerHTML = `
                    <div class="ai-suggestion">
                        <h4>💡 AI Suggestions for Today</h4>
                        <p>${aiResponse.replace(/\n/g, '<br>')}</p>
                    </div>
                `;
            } catch (error) {
                elements.aiContent.innerHTML = `
                    <div class="ai-suggestion">
                        <h4>⚠️ AI Service Unavailable</h4>
                        <p>Unable to connect to Gemini AI. Please check your API key and internet connection.</p>
                        <p>Error: ${error.message}</p>
                    </div>
                `;
            }
        }

        // Generate full analysis of all journal entries
        async function generateFullAnalysis() {
            if (!state.isAiEnabled) {
                showNotification('Please configure your Gemini API key first', 'error');
                return;
            }

            if (state.entries.length === 0) {
                showNotification('No journal entries to analyze', 'info');
                return;
            }

            elements.fullAnalysisContent.innerHTML = `
                <div class="ai-loading">
                    <div class="spinner"></div>
                    <span>Gemini AI is analyzing your complete journal history...</span>
                </div>
            `;

            try {
                // Prepare journal data for analysis
                const journalSummary = state.entries.map(entry => {
                    const date = new Date(entry.date).toLocaleDateString();
                    return `Date: ${date}, Focus: ${getFocusLabel(entry.focus)}, Rating: ${entry.rating}/5, Study: ${entry.study.substring(0, 100)}...`;
                }).join('\n');

                const prompt = `
                Analyze this journal data from a 1-year "dangerous intelligence" transformation program:

                ${journalSummary}

                Total Entries: ${state.entries.length}
                Current Streak: ${calculateStreak()} days
                Average Rating: ${calculateAverageRating()}

                Please provide:
                1. Key patterns and trends in their learning journey
                2. Strengths and areas for improvement
                3. Specific recommendations for the next phase of their development
                4. Insights about their consistency and progress

                Format the response with clear headings and actionable insights.
                `;

                const aiResponse = await callGeminiAPI(prompt);
                elements.fullAnalysisContent.innerHTML = `
                    <div class="ai-suggestion">
                        <h4>📊 Complete Journal Analysis</h4>
                        <p>${aiResponse.replace(/\n/g, '<br>')}</p>
                    </div>
                `;
            } catch (error) {
                elements.fullAnalysisContent.innerHTML = `
                    <div class="ai-suggestion">
                        <h4>⚠️ Analysis Failed</h4>
                        <p>Unable to generate analysis. Error: ${error.message}</p>
                    </div>
                `;
            }
        }

        // Generate analysis for archive search results
        async function generateArchiveAnalysis() {
            if (!state.isAiEnabled) {
                showNotification('Please configure your Gemini API key first', 'error');
                return;
            }

            // This would analyze the current search results
            showNotification('Archive analysis feature coming soon!', 'info');
        }

        // Generate progress analysis
        async function generateProgressAnalysis() {
            if (!state.isAiEnabled) {
                showNotification('Please configure your Gemini API key first', 'error');
                return;
            }

            // This would analyze progress patterns
            showNotification('Progress analysis feature coming soon!', 'info');
        }

        // Save Gemini API key
        function saveApiKey() {
            const apiKey = elements.apiKeyInput.value.trim();
            if (!apiKey) {
                showNotification('Please enter a valid API key', 'error');
                return;
            }

            state.geminiApiKey = apiKey;
            state.isAiEnabled = true;
            localStorage.setItem('di_gemini_api_key', apiKey);
            
            elements.apiStatusIndicator.classList.add('connected');
            elements.apiStatusText.textContent = 'API key configured and ready';
            elements.apiKeyInput.type = 'password'; // Hide the key
            elements.apiKeyInput.value = '••••••••••••••••';
            
            showNotification('Gemini API key saved successfully!', 'success');
        }

        // Load saved API key
        function loadApiKey() {
            const savedKey = localStorage.getItem('di_gemini_api_key');
            if (savedKey) {
                state.geminiApiKey = savedKey;
                state.isAiEnabled = true;
                elements.apiStatusIndicator.classList.add('connected');
                elements.apiStatusText.textContent = 'API key configured and ready';
                elements.apiKeyInput.type = 'password';
                elements.apiKeyInput.value = '••••••••••••••••';
            }
        }

        // Calculate current streak
        function calculateStreak() {
            let streak = 0;
            const today = new Date();
            let checkDate = new Date(today);
            
            while (true) {
                const dateStr = checkDate.toISOString().split('T')[0];
                const hasEntry = state.entries.some(entry => 
                    entry.date.split('T')[0] === dateStr
                );
                
                if (hasEntry) {
                    streak++;
                    checkDate.setDate(checkDate.getDate() - 1);
                } else {
                    break;
                }
            }
            
            return streak;
        }

        // Calculate average rating
        function calculateAverageRating() {
            if (state.entries.length === 0) return 0;
            const total = state.entries.reduce((sum, entry) => sum + entry.rating, 0);
            return (total / state.entries.length).toFixed(1);
        }

        // The rest of the functions (authentication, journal management, etc.)
        // would remain the same as in the previous implementation...

        // Check if this is first time setup
        function checkFirstTimeSetup() {
            const hasUser = localStorage.getItem('di_username');
            if (!hasUser) {
                elements.setupNote.style.display = 'block';
            }
        }

        // Handle login
        function handleLogin() {
            const username = elements.usernameInput.value.trim();
            const password = elements.passwordInput.value.trim();
            
            if (!username || !password) {
                showNotification('Please enter both username and passkey', 'error');
                return;
            }
            
            // Check if user exists
            const storedUsername = localStorage.getItem('di_username');
            const storedPassword = localStorage.getItem('di_password');
            
            if (storedUsername && storedPassword) {
                // Existing user - verify credentials
                if (username === storedUsername && password === storedPassword) {
                    successfulLogin(username);
                } else {
                    showNotification('Invalid username or passkey', 'error');
                }
            } else {
                // New user - create account
                localStorage.setItem('di_username', username);
                localStorage.setItem('di_password', password);
                localStorage.setItem('di_created', new Date().toISOString());
                successfulLogin(username);
                showNotification('Account created successfully!', 'success');
            }
        }

        // Handle successful login
        function successfulLogin(username) {
            authState.isAuthenticated = true;
            authState.username = username;
            
            // Update last login
            localStorage.setItem('di_last_login', new Date().toISOString());
            
            // Show app, hide login
            elements.loginContainer.style.display = 'none';
            elements.appContainer.style.display = 'block';
            
            // Update UI
            elements.userName.textContent = username;
            elements.displayUsername.textContent = username;
            
            const created = localStorage.getItem('di_created');
            if (created) {
                elements.accountCreated.textContent = new Date(created).toLocaleDateString();
            }
            
            const lastLogin = localStorage.getItem('di_last_login');
            if (lastLogin) {
                elements.lastLogin.textContent = new Date(lastLogin).toLocaleString();
            }
            
            // Initialize the journal app
            initializeJournalApp();
            // Load AI configuration
            loadApiKey();
        }

        // Handle logout
        function handleLogout() {
            if (confirm('Are you sure you want to logout?')) {
                authState.isAuthenticated = false;
                authState.username = null;
                
                // Hide app, show login
                elements.appContainer.style.display = 'none';
                elements.loginContainer.style.display = 'block';
                
                // Clear form
                elements.usernameInput.value = '';
                elements.passwordInput.value = '';
                
                showNotification('Logged out successfully', 'info');
            }
        }

        // Change password
        function changePassword() {
            const newPassword = prompt('Enter new passkey:');
            if (newPassword && newPassword.length >= 4) {
                localStorage.setItem('di_password', newPassword);
                showNotification('Passkey updated successfully', 'success');
            } else if (newPassword) {
                showNotification('Passkey must be at least 4 characters', 'error');
            }
        }

        // Export data
        function exportData() {
            const data = {
                entries: state.entries,
                exportDate: new Date().toISOString(),
                username: authState.username
            };
            
            const dataStr = JSON.stringify(data, null, 2);
            const dataBlob = new Blob([dataStr], { type: 'application/json' });
            
            const link = document.createElement('a');
            link.href = URL.createObjectURL(dataBlob);
            link.download = `intelligence-journal-backup-${new Date().toISOString().split('T')[0]}.json`;
            link.click();
            
            showNotification('Data exported successfully', 'success');
        }

        // Reset all data
        function resetData() {
            if (confirm('WARNING: This will delete ALL your journal entries. This action cannot be undone. Are you sure?')) {
                if (confirm('Are you absolutely sure? All your data will be permanently deleted.')) {
                    state.entries = [];
                    saveEntries();
                    updateStats();
                    renderEntries();
                    showNotification('All data has been reset', 'info');
                }
            }
        }

        // Initialize the journal app after login
        function initializeJournalApp() {
            loadEntries();
            updateStats();
            updateMonthlyPlan();
            updateCurrentDate();
            renderEntries();
            setupAutoSave();
            setupArchiveFilters();
            
            // Check if we need to create today's entry
            checkTodaysEntry();
        }

        // Switch between pages
        function switchPage(pageId) {
            // Hide all pages
            elements.journalPage.classList.remove('active');
            elements.archivePage.classList.remove('active');
            elements.progressPage.classList.remove('active');
            elements.aiPage.classList.remove('active');
            elements.securityPage.classList.remove('active');
            
            // Show selected page
            document.getElementById(`${pageId}-page`).classList.add('active');
            
            // Update page-specific content
            if (pageId === 'archive') {
                performSearch();
            } else if (pageId === 'progress') {
                updateProgressPage();
            } else if (pageId === 'security') {
                // Security page is already updated on login
            }
        }

        // Load entries from localStorage
        function loadEntries() {
            const storedEntries = localStorage.getItem('di_entries');
            if (storedEntries) {
                state.entries = JSON.parse(storedEntries);
            }
            
            // Load last saved date
            const lastDate = localStorage.getItem('di_last_saved');
            if (lastDate) {
                state.lastSavedDate = new Date(lastDate);
            }
        }

        // Save entries to localStorage
        function saveEntries() {
            localStorage.setItem('di_entries', JSON.stringify(state.entries));
            localStorage.setItem('di_last_saved', new Date().toISOString());
        }

        // Set up auto-save functionality
        function setupAutoSave() {
            // Auto-save every 30 seconds
            state.autoSaveInterval = setInterval(() => {
                if (hasFormData()) {
                    saveCurrentEntry();
                    showAutoSaveIndicator();
                }
            }, 30000);
        }

        // Check if form has data
        function hasFormData() {
            return formElements.study.value.trim() !== '' ||
                   formElements.insights.value.trim() !== '' ||
                   formElements.practice.value.trim() !== '' ||
                   formElements.reflection.value.trim() !== '' ||
                   state.selectedRating > 0;
        }

        // Auto-save current entry
        function autoSaveEntry() {
            if (hasFormData()) {
                saveCurrentEntry();
                showAutoSaveIndicator();
            }
        }

        // Show auto-save indicator
        function showAutoSaveIndicator() {
            elements.autoSaveIndicator.style.display = 'inline-block';
            setTimeout(() => {
                elements.autoSaveIndicator.style.display = 'none';
            }, 2000);
        }

        // Save current entry (without creating a new one)
        function saveCurrentEntry() {
            const focus = formElements.focus.value;
            const study = formElements.study.value.trim();
            const insights = formElements.insights.value.trim();
            const practice = formElements.practice.value.trim();
            const reflection = formElements.reflection.value.trim();
            const rating = state.selectedRating;

            // Only save if we have data
            if (study || insights || practice || reflection || rating > 0) {
                const today = new Date().toISOString().split('T')[0];
                
                // Check if we already have an entry for today
                const existingIndex = state.entries.findIndex(entry => 
                    entry.date.split('T')[0] === today
                );

                if (existingIndex !== -1) {
                    // Update existing entry
                    state.entries[existingIndex] = {
                        ...state.entries[existingIndex],
                        focus,
                        study,
                        insights,
                        practice,
                        reflection,
                        rating,
                        updatedAt: new Date().toISOString()
                    };
                } else {
                    // Create new entry
                    const newEntry = {
                        id: Date.now().toString(),
                        focus,
                        study,
                        insights,
                        practice,
                        reflection,
                        rating,
                        date: new Date().toISOString(),
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString()
                    };
                    state.entries.unshift(newEntry);
                }

                // Save to localStorage and update UI
                saveEntries();
                updateStats();
                renderEntries();
            }
        }

        // Check if we need to create today's entry
        function checkTodaysEntry() {
            const today = new Date().toISOString().split('T')[0];
            const hasEntryForToday = state.entries.some(entry => 
                entry.date.split('T')[0] === today
            );
            
            if (!hasEntryForToday) {
                // Clear form for new day
                resetForm();
                elements.journalForm.style.display = 'block';
                elements.emptyState.style.display = 'none';
            } else {
                // Load today's entry
                const todayEntry = state.entries.find(entry => 
                    entry.date.split('T')[0] === today
                );
                if (todayEntry) {
                    loadEntryIntoForm(todayEntry);
                }
            }
        }

        // Load entry into form
        function loadEntryIntoForm(entry) {
            formElements.focus.value = entry.focus;
            formElements.study.value = entry.study;
            formElements.insights.value = entry.insights;
            formElements.practice.value = entry.practice;
            formElements.reflection.value = entry.reflection;
            
            // Set rating
            state.selectedRating = entry.rating;
            document.querySelectorAll('.rating-btn').forEach(btn => {
                btn.classList.remove('active');
                if (parseInt(btn.dataset.rating) === entry.rating) {
                    btn.classList.add('active');
                }
            });
            
            state.editingEntryId = entry.id;
            elements.journalForm.style.display = 'block';
            elements.emptyState.style.display = 'none';
        }

        // Skip to the next day
        function skipDay() {
            if (confirm('Are you sure you want to skip today? Any unsaved changes will be lost.')) {
                resetForm();
                showNotification('Day skipped. You can continue tomorrow.', 'info');
            }
        }

        // Reset form fields
        function resetForm() {
            formElements.focus.value = 'logic';
            formElements.study.value = '';
            formElements.insights.value = '';
            formElements.practice.value = '';
            formElements.reflection.value = '';
            state.selectedRating = 0;
            state.editingEntryId = null;
            
            // Reset rating buttons
            document.querySelectorAll('.rating-btn').forEach(btn => {
                btn.classList.remove('active');
            });
        }

        // Update statistics
        function updateStats() {
            const total = state.entries.length;
            
            // Calculate current streak
            const streak = calculateStreak();
            
            // Calculate completion rate (based on entries this month vs expected)
            const daysInMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
            const currentMonthEntries = state.entries.filter(entry => {
                const entryDate = new Date(entry.date);
                return entryDate.getMonth() === new Date().getMonth() && 
                       entryDate.getFullYear() === new Date().getFullYear();
            }).length;
            
            const completionRate = Math.min(Math.round((currentMonthEntries / daysInMonth) * 100), 100);
            
            // Calculate days remaining in the year
            const now = new Date();
            const endOfYear = new Date(now.getFullYear(), 11, 31);
            const daysRemaining = Math.ceil((endOfYear - now) / (1000 * 60 * 60 * 24));
            
            elements.totalEntries.textContent = total;
            elements.currentStreak.textContent = streak;
            elements.completionRate.textContent = `${completionRate}%`;
            elements.daysRemaining.textContent = daysRemaining;
            
            // Update progress
            const progress = Math.min(Math.round((state.currentMonth / 12) * 100), 100);
            elements.progressPercent.textContent = `${progress}%`;
            elements.progressFill.style.width = `${progress}%`;
        }

        // Update monthly plan display
        function updateMonthlyPlan() {
            const plan = monthlyPlans[state.currentMonth];
            if (plan) {
                elements.monthTitle.textContent = plan.title;
                elements.monthTheme.textContent = plan.theme;
                elements.monthGoal.textContent = plan.goal;
                elements.monthChallenge.textContent = plan.challenge;
                
                // Update habits list
                elements.habitsList.innerHTML = '';
                plan.habits.forEach(habit => {
                    const li = document.createElement('li');
                    li.innerHTML = `<i class="fas fa-check-circle"></i> ${habit}`;
                    elements.habitsList.appendChild(li);
                });
                
                // Update sources list
                elements.sourcesList.innerHTML = '';
                plan.sources.forEach(source => {
                    const li = document.createElement('li');
                    li.innerHTML = `<i class="fas fa-book"></i> ${source}`;
                    elements.sourcesList.appendChild(li);
                });
            }
        }

        // Navigate to previous month
        function previousMonth() {
            if (state.currentMonth > 1) {
                state.currentMonth--;
                updateMonthlyPlan();
                updateStats();
            }
        }

        // Navigate to next month
        function nextMonth() {
            if (state.currentMonth < 12) {
                state.currentMonth++;
                updateMonthlyPlan();
                updateStats();
            }
        }

        // Update current date display
        function updateCurrentDate() {
            const now = new Date();
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            elements.currentDate.textContent = now.toLocaleDateString('en-US', options);
        }

        // Render journal entries
        function renderEntries() {
            // Clear entries list
            elements.journalEntries.innerHTML = '';

            // Show empty state if no entries
            if (state.entries.length === 0) {
                elements.journalEntries.appendChild(elements.emptyState);
                elements.emptyState.style.display = 'block';
                return;
            }

            // Hide empty state
            elements.emptyState.style.display = 'none';

            // Create entry elements (show last 7 entries)
            const recentEntries = state.entries.slice(0, 7);
            
            recentEntries.forEach(entry => {
                const entryElement = document.createElement('div');
                entryElement.className = 'journal-item';
                
                const entryDate = new Date(entry.date);
                const formattedDate = entryDate.toLocaleDateString('en-US', { 
                    weekday: 'short', 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                });
                
                // Create rating stars
                let starsHtml = '';
                for (let i = 1; i <= 5; i++) {
                    starsHtml += `<i class="fas fa-star${i <= entry.rating ? ' rating-star' : ''}"></i>`;
                }
                
                // Get focus label
                const focusLabels = {
                    logic: 'Logic & Critical Thinking',
                    focus: 'Focus & Discipline',
                    learning: 'Learning & Memory',
                    systems: 'Systems Thinking',
                    emotion: 'Emotional Mastery',
                    communication: 'Communication & Influence',
                    technical: 'Technical Power',
                    strategy: 'Strategic Thinking',
                    creativity: 'Creativity & Innovation',
                    psychology: 'Psychology & Leadership'
                };
                
                entryElement.innerHTML = `
                    <div class="journal-date">${formattedDate}</div>
                    <div class="journal-focus">${focusLabels[entry.focus] || entry.focus}</div>
                    <div class="journal-content">
                        <div class="journal-title">${escapeHtml(entry.study.substring(0, 100))}${entry.study.length > 100 ? '...' : ''}</div>
                        <div class="journal-insights"><strong>Insights:</strong> ${escapeHtml(entry.insights.substring(0, 150))}${entry.insights.length > 150 ? '...' : ''}</div>
                        <div class="journal-practice"><strong>Practice:</strong> ${escapeHtml(entry.practice.substring(0, 150))}${entry.practice.length > 150 ? '...' : ''}</div>
                    </div>
                    <div class="journal-rating">
                        ${starsHtml}
                    </div>
                    <div class="journal-actions">
                        <button class="action-btn ai" onclick="analyzeEntry('${entry.id}')">
                            <i class="fas fa-robot"></i> AI Analysis
                        </button>
                    </div>
                `;

                elements.journalEntries.appendChild(entryElement);
            });
        }

        // Analyze a specific entry with AI
        async function analyzeEntry(entryId) {
            if (!state.isAiEnabled) {
                showNotification('Please configure your Gemini API key first', 'error');
                switchPage('ai');
                return;
            }

            const entry = state.entries.find(e => e.id === entryId);
            if (!entry) return;

            showNotification('Analyzing entry with Gemini AI...', 'ai');

            try {
                const prompt = `
                Analyze this journal entry from a "dangerous intelligence" development program:

                Date: ${new Date(entry.date).toLocaleDateString()}
                Focus Area: ${getFocusLabel(entry.focus)}
                Study/Learning: ${entry.study}
                Insights: ${entry.insights}
                Practice/Application: ${entry.practice}
                Reflection: ${entry.reflection}
                Rating: ${entry.rating}/5

                Please provide:
                1. Key strengths in this entry
                2. Areas for deeper exploration
                3. Connections to broader intelligence development
                4. One challenging question to push thinking further

                Keep the response concise and actionable.
                `;

                const analysis = await callGeminiAPI(prompt);
                
                // Create a modal or display the analysis
                elements.aiInsights.style.display = 'block';
                elements.aiContent.innerHTML = `
                    <div class="ai-suggestion">
                        <h4>🔍 AI Analysis of Entry from ${new Date(entry.date).toLocaleDateString()}</h4>
                        <p>${analysis.replace(/\n/g, '<br>')}</p>
                    </div>
                `;
                
                // Switch to journal page to show the analysis
                switchPage('journal');
            } catch (error) {
                showNotification('Failed to analyze entry: ' + error.message, 'error');
            }
        }

        // Set up archive filters
        function setupArchiveFilters() {
            // Add months to filter
            for (let i = 1; i <= 12; i++) {
                const option = document.createElement('option');
                option.value = i;
                option.textContent = monthlyPlans[i].title;
                elements.monthFilter.appendChild(option);
            }
            
            // Add focus areas to filter
            const focusAreas = {
                logic: 'Logic & Critical Thinking',
                focus: 'Focus & Discipline',
                learning: 'Learning & Memory',
                systems: 'Systems Thinking',
                emotion: 'Emotional Mastery',
                communication: 'Communication & Influence',
                technical: 'Technical Power',
                strategy: 'Strategic Thinking',
                creativity: 'Creativity & Innovation',
                psychology: 'Psychology & Leadership'
            };
            
            for (const [value, label] of Object.entries(focusAreas)) {
                const option = document.createElement('option');
                option.value = value;
                option.textContent = label;
                elements.focusFilter.appendChild(option);
            }
        }

        // Perform search across entries
        function performSearch() {
            const searchTerm = elements.searchInput.value.toLowerCase();
            const monthFilter = elements.monthFilter.value;
            const focusFilter = elements.focusFilter.value;
            const ratingFilter = elements.ratingFilter.value;
            
            let results = [...state.entries];
            
            // Apply filters
            if (monthFilter) {
                results = results.filter(entry => {
                    const entryDate = new Date(entry.date);
                    return entryDate.getMonth() + 1 === parseInt(monthFilter);
                });
            }
            
            if (focusFilter) {
                results = results.filter(entry => entry.focus === focusFilter);
            }
            
            if (ratingFilter) {
                const minRating = parseInt(ratingFilter);
                results = results.filter(entry => entry.rating >= minRating);
            }
            
            // Apply search term
            if (searchTerm) {
                results = results.filter(entry => 
                    entry.study.toLowerCase().includes(searchTerm) ||
                    entry.insights.toLowerCase().includes(searchTerm) ||
                    entry.practice.toLowerCase().includes(searchTerm) ||
                    entry.reflection.toLowerCase().includes(searchTerm)
                );
            }
            
            // Sort by date (newest first)
            results.sort((a, b) => new Date(b.date) - new Date(a.date));
            
            // Update stats
            elements.entriesFound.textContent = results.length;
            
            // Calculate average rating
            const avgRating = results.length > 0 
                ? (results.reduce((sum, entry) => sum + entry.rating, 0) / results.length).toFixed(1)
                : '0.0';
            elements.averageRating.textContent = avgRating;
            
            // Find most active month
            if (results.length > 0) {
                const monthCounts = {};
                results.forEach(entry => {
                    const month = new Date(entry.date).getMonth() + 1;
                    monthCounts[month] = (monthCounts[month] || 0) + 1;
                });
                
                let mostActive = 1;
                let maxCount = 0;
                for (const [month, count] of Object.entries(monthCounts)) {
                    if (count > maxCount) {
                        mostActive = parseInt(month);
                        maxCount = count;
                    }
                }
                
                elements.mostActiveMonth.textContent = monthlyPlans[mostActive].title;
            } else {
                elements.mostActiveMonth.textContent = '-';
            }
            
            // Display results
            displaySearchResults(results, searchTerm);
        }

        // Display search results
        function displaySearchResults(results, searchTerm) {
            elements.archiveResults.innerHTML = '';
            
            if (results.length === 0) {
                elements.archiveResults.innerHTML = `
                    <div class="empty-state">
                        <i class="fas fa-search"></i>
                        <h3>No entries found</h3>
                        <p>Try adjusting your search criteria</p>
                    </div>
                `;
                return;
            }
            
            results.forEach(entry => {
                const entryDate = new Date(entry.date);
                const formattedDate = entryDate.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                });
                
                // Highlight search term in content
                const highlightText = (text) => {
                    if (!searchTerm) return escapeHtml(text);
                    
                    const regex = new RegExp(`(${searchTerm})`, 'gi');
                    return escapeHtml(text).replace(regex, '<span class="highlight">$1</span>');
                };
                
                const summary = document.createElement('div');
                summary.className = 'entry-summary';
                summary.innerHTML = `
                    <div class="entry-date">${formattedDate}</div>
                    <div class="entry-content">
                        <strong>Focus:</strong> ${getFocusLabel(entry.focus)}<br>
                        <strong>Studied:</strong> ${highlightText(entry.study)}<br>
                        <strong>Insights:</strong> ${highlightText(entry.insights)}<br>
                        <strong>Practice:</strong> ${highlightText(entry.practice)}<br>
                        <strong>Reflection:</strong> ${highlightText(entry.reflection)}<br>
                        <strong>Rating:</strong> ${'★'.repeat(entry.rating)}${'☆'.repeat(5 - entry.rating)}
                    </div>
                    <div style="margin-top: 10px;">
                        <button class="action-btn ai" onclick="analyzeEntry('${entry.id}')">
                            <i class="fas fa-robot"></i> AI Analysis
                        </button>
                    </div>
                `;
                
                elements.archiveResults.appendChild(summary);
            });
        }

        // Update progress page
        function updateProgressPage() {
            elements.progressTotalEntries.textContent = state.entries.length;
            
            // Calculate year completion
            const now = new Date();
            const startOfYear = new Date(now.getFullYear(), 0, 1);
            const endOfYear = new Date(now.getFullYear(), 11, 31);
            const yearProgress = Math.round(((now - startOfYear) / (endOfYear - startOfYear)) * 100);
            elements.progressCompletion.textContent = `${yearProgress}%`;
            
            // Calculate average rating
            const avgRating = calculateAverageRating();
            elements.progressAvgRating.textContent = avgRating;
            
            // Find best month
            if (state.entries.length > 0) {
                const monthRatings = {};
                state.entries.forEach(entry => {
                    const month = new Date(entry.date).getMonth() + 1;
                    if (!monthRatings[month]) {
                        monthRatings[month] = { sum: 0, count: 0 };
                    }
                    monthRatings[month].sum += entry.rating;
                    monthRatings[month].count++;
                });
                
                let bestMonth = 1;
                let bestAvg = 0;
                for (const [month, data] of Object.entries(monthRatings)) {
                    const avg = data.sum / data.count;
                    if (avg > bestAvg) {
                        bestMonth = parseInt(month);
                        bestAvg = avg;
                    }
                }
                
                elements.progressBestMonth.textContent = monthlyPlans[bestMonth].title;
            } else {
                elements.progressBestMonth.textContent = '-';
            }
            
            // Display monthly performance
            displayMonthlyPerformance();
        }

        // Display monthly performance chart
        function displayMonthlyPerformance() {
            const monthData = {};
            
            // Initialize all months
            for (let i = 1; i <= 12; i++) {
                monthData[i] = { entries: 0, totalRating: 0 };
            }
            
            // Count entries and ratings per month
            state.entries.forEach(entry => {
                const month = new Date(entry.date).getMonth() + 1;
                monthData[month].entries++;
                monthData[month].totalRating += entry.rating;
            });
            
            // Create performance chart
            let chartHTML = '<div class="performance-chart">';
            
            for (let i = 1; i <= 12; i++) {
                const data = monthData[i];
                const avgRating = data.entries > 0 ? (data.totalRating / data.entries).toFixed(1) : 0;
                const barHeight = data.entries > 0 ? Math.min(data.entries * 5, 100) : 5;
                
                chartHTML += `
                    <div class="month-bar" style="height: ${barHeight}px; background: ${avgRating >= 4 ? 'var(--success)' : avgRating >= 3 ? 'var(--warning)' : 'var(--danger)'}">
                        <div class="month-label">${i}</div>
                        <div class="month-stats">
                            <div>${data.entries} entries</div>
                            <div>${avgRating}★</div>
                        </div>
                    </div>
                `;
            }
            
            chartHTML += '</div>';
            elements.monthlyPerformance.innerHTML = chartHTML;
            
            // Add CSS for the chart
            const style = document.createElement('style');
            style.textContent = `
                .performance-chart {
                    display: flex;
                    align-items: flex-end;
                    gap: 10px;
                    height: 200px;
                    margin-top: 20px;
                    padding: 20px;
                    background: var(--dark);
                    border-radius: var(--border-radius);
                }
                .month-bar {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    align-items: center;
                    border-radius: 4px 4px 0 0;
                    position: relative;
                    min-height: 30px;
                }
                .month-label {
                    font-weight: bold;
                    margin-bottom: 5px;
                }
                .month-stats {
                    font-size: 0.8rem;
                    text-align: center;
                }
            `;
            document.head.appendChild(style);
        }

        // Get focus label from value
        function getFocusLabel(focusValue) {
            const focusLabels = {
                logic: 'Logic & Critical Thinking',
                focus: 'Focus & Discipline',
                learning: 'Learning & Memory',
                systems: 'Systems Thinking',
                emotion: 'Emotional Mastery',
                communication: 'Communication & Influence',
                technical: 'Technical Power',
                strategy: 'Strategic Thinking',
                creativity: 'Creativity & Innovation',
                psychology: 'Psychology & Leadership'
            };
            
            return focusLabels[focusValue] || focusValue;
        }

        // Show notification
        function showNotification(message, type = 'info') {
            elements.notification.textContent = message;
            elements.notification.className = `notification ${type}`;
            elements.notification.classList.add('show');
            
            setTimeout(() => {
                elements.notification.classList.remove('show');
            }, 3000);
        }

        // Escape HTML to prevent XSS
        function escapeHtml(unsafe) {
            if (!unsafe) return '';
            return unsafe
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
        }

        // Initialize the app when DOM is loaded
        document.addEventListener('DOMContentLoaded', init);