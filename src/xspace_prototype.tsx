import React, { useState, useEffect } from 'react';
import { AlertCircle, TrendingDown, Calendar, BookOpen, Heart, Award, Users, Home, CheckCircle, X, Sparkles, Globe, Volume2, Leaf, HandHeart, BookMarked, Compass, Mountain, Sun } from 'lucide-react';

// Mock data with changemaking features
const generateStudentData = (profile = 'default') => {
  const profiles = {
    default: {
      student: {
        name: "Jordan Smith",
        id: "300123456",
        program: "Biology Major",
        gpa: 3.2,
        housing: "Baker House - Room 214",
        indigenousStatus: false,
        internationalStudent: false,
        accessibility: { screenReader: false, simplifiedLanguage: false },
        language: "en",
        financialNeed: "medium"
      }
    },
    indigenous: {
      student: {
        name: "Sarah Bearfoot",
        id: "300234567",
        program: "Indigenous Studies",
        gpa: 3.4,
        housing: "Baker House - Room 310",
        indigenousStatus: true,
        nation: "Stó:lō",
        internationalStudent: false,
        accessibility: { screenReader: false, simplifiedLanguage: false },
        language: "en",
        financialNeed: "high"
      }
    },
    international: {
      student: {
        name: "Priya Sharma",
        id: "300345678",
        program: "Computer Science",
        gpa: 3.6,
        housing: "Baker House - Room 205",
        indigenousStatus: false,
        internationalStudent: true,
        countryOfOrigin: "India",
        accessibility: { screenReader: false, simplifiedLanguage: false },
        language: "pa", // Punjabi
        financialNeed: "medium"
      }
    },
    accessibility: {
      student: {
        name: "Alex Chen",
        id: "300456789",
        program: "Environmental Science",
        gpa: 3.3,
        housing: "Baker House - Room 412",
        indigenousStatus: false,
        internationalStudent: false,
        accessibility: { screenReader: true, simplifiedLanguage: true },
        language: "en",
        financialNeed: "low"
      }
    }
  };

  const selectedProfile = profiles[profile];
  
  return {
    ...selectedProfile,
    courses: [
      {
        id: "BES-145",
        name: "Cellular Biology",
        grade: 68,
        trend: "down",
        missedAssignments: 2,
        lastActivity: "3 days ago",
        riskLevel: "high"
      },
      {
        id: "MATH-111",
        name: "Calculus I",
        grade: 82,
        trend: "stable",
        missedAssignments: 0,
        lastActivity: "1 day ago",
        riskLevel: "low"
      },
      {
        id: "ENGL-105",
        name: "Academic Writing",
        grade: 76,
        trend: "up",
        missedAssignments: 0,
        lastActivity: "today",
        riskLevel: "medium"
      }
    ],
    recommendations: generateRecommendations(selectedProfile.student),
    upcomingEvents: generateEvents(selectedProfile.student),
    communityImpact: {
      helpReceived: {
        slgSessions: 3,
        counselling: 2,
        scholarships: 1500
      },
      helpGiven: {
        peerTutoring: 5,
        mentoring: 2,
        volunteerHours: 12
      },
      reciprocityScore: 0.85,
      carbonSaved: "15kg CO2",
      paperSaved: 250
    }
  };
};

const generateRecommendations = (student, quizData = null) => {
  const recs = [];

  // Quiz-based personalized recommendations
  if (quizData) {
    // Mental health support based on stress level
    if (quizData.stressLevel >= 4) {
      recs.push({
        type: "wellness",
        title: "High Stress Detected - Wellness Support Available",
        description: "Based on your wellness check, we recommend connecting with support services",
        action: "Book counselling appointment",
        priority: "critical",
        icon: "heart",
        changemaking: "Inclusive Empowerment",
        metadata: {
          reason: "Wellness quiz indicates high stress",
          confidential: true
        }
      });
    }

    // Sleep quality recommendations
    if (quizData.sleepQuality <= 2) {
      recs.push({
        type: "wellness",
        title: "Sleep Workshop Available",
        description: "Improve your sleep habits with our wellness team",
        action: "Register for sleep hygiene workshop",
        priority: "medium",
        icon: "sun",
        changemaking: "Inclusive Empowerment"
      });
    }

    // Social comfort - group activities
    if (quizData.socialComfort >= 4 && quizData.groupSize === 'large') {
      recs.push({
        type: "social",
        title: "Campus Community Event",
        description: "Large group social event - meet new friends!",
        action: "RSVP for Friday social mixer",
        priority: "low",
        icon: "users",
        changemaking: "Reciprocity"
      });
    } else if (quizData.socialComfort <= 2) {
      recs.push({
        type: "social",
        title: "Small Group Study Session",
        description: "Low-pressure, small group setting (3-4 students)",
        action: "Join intimate study group",
        priority: "medium",
        icon: "users",
        changemaking: "Inclusive Empowerment"
      });
    }

    // Skills-based recommendations
    if (quizData.skills.includes('coding')) {
      recs.push({
        type: "community-service",
        title: "Code for Good: Help Local Nonprofits",
        description: "Use your coding skills to build websites for community organizations",
        action: "Join project team",
        priority: "medium",
        icon: "hand-heart",
        changemaking: "Reciprocity",
        metadata: {
          communityPartner: "Fraser Valley Food Bank",
          skillsUsed: ["coding", "web development"]
        }
      });
    }

    if (quizData.skills.includes('music')) {
      recs.push({
        type: "club",
        title: "Music Club Jam Session",
        description: "Based on your musical interests - connect with fellow musicians",
        action: "RSVP for Wednesday 7pm",
        priority: "low",
        icon: "users",
        changemaking: "Reciprocity",
        metadata: {
          matchReason: "Music skills match"
        }
      });
    }

    if (quizData.skills.includes('art')) {
      recs.push({
        type: "club",
        title: "Art Collective Workshop",
        description: "Express yourself creatively with other artists",
        action: "Join Thursday evening session",
        priority: "low",
        icon: "users",
        changemaking: "Reciprocity"
      });
    }

    // Interest-based activities
    if (quizData.interests.includes('environment')) {
      recs.push({
        type: "sustainability",
        title: "Campus Sustainability Project",
        description: "Help UFV reach zero-waste goals - match your environmental passion",
        action: "Volunteer for green team",
        priority: "medium",
        icon: "leaf",
        changemaking: "Sustainable Futures",
        metadata: {
          matchReason: "Environmental interests"
        }
      });
    }

    if (quizData.interests.includes('sports')) {
      recs.push({
        type: "wellness",
        title: "Intramural Sports Registration",
        description: "Stay active and meet friends through sports",
        action: "Sign up for basketball league",
        priority: "low",
        icon: "users",
        changemaking: "Inclusive Empowerment"
      });
    }

    if (quizData.interests.includes('volunteering')) {
      recs.push({
        type: "community-service",
        title: "Fraser Valley Community Partnership",
        description: "Match with local nonprofits based on your interests",
        action: "Browse volunteer opportunities",
        priority: "medium",
        icon: "hand-heart",
        changemaking: "Reciprocity"
      });
    }

    // Career goals matching
    if (quizData.careerGoals.includes('tech')) {
      recs.push({
        type: "career",
        title: "Tech Career Fair",
        description: "Meet Vancouver tech companies hiring students",
        action: "Register for career fair",
        priority: "high",
        icon: "award",
        changemaking: "Sustainable Futures"
      });
    }

    if (quizData.careerGoals.includes('healthcare')) {
      recs.push({
        type: "career",
        title: "Healthcare Co-op Opportunity",
        description: "Fraser Health is hiring student coordinators",
        action: "Apply by Nov 30",
        priority: "high",
        icon: "award",
        changemaking: "Reciprocity"
      });
    }

    // Learning style preferences
    if (quizData.preferredLearning.includes('visual')) {
      recs.push({
        type: "academic-support",
        title: "Visual Learning Resources Available",
        description: "Video tutorials and concept maps for your courses",
        action: "Access learning resources",
        priority: "low",
        icon: "book",
        changemaking: "Inclusive Empowerment"
      });
    }

    // Time of day preferences
    if (quizData.timeOfDay.includes('evening')) {
      recs.push({
        type: "schedule",
        title: "Evening Study Space Available",
        description: "Based on your preference for evening activities",
        action: "Book 7-9pm study room",
        priority: "low",
        icon: "calendar",
        changemaking: "Inclusive Empowerment"
      });
    }
  }

  // Indigenous-specific recommendations
  if (student.indigenousStatus) {
    recs.push({
      type: "indigenous-support",
      title: "Elder Mary Available Wednesday",
      description: "Indigenous Student Centre - Cultural guidance and community support",
      action: "Book time 2-4pm",
      priority: "high",
      icon: "mountain",
      changemaking: "Indigenization",
      metadata: {
        location: "Indigenous Student Centre",
        languages: ["English", "Halq'eméylem"],
        culturalSupport: true
      }
    });

    recs.push({
      type: "land-based-learning",
      title: "Cedar Weaving Workshop",
      description: "Learn traditional Coast Salish weaving with community Elders",
      action: "RSVP for Saturday 10am",
      priority: "medium",
      icon: "mountain",
      changemaking: "Indigenization",
      metadata: {
        location: "Traditional Territory Walk",
        facilitator: "Elder Thomas"
      }
    });
  }

  // Financial need recommendations
  if (student.financialNeed === "high") {
    recs.push({
      type: "financial-support",
      title: "Emergency Funding Available",
      description: "UFVSA emergency bursary - No repayment required",
      action: "Apply now (48hr turnaround)",
      priority: "critical",
      icon: "award",
      changemaking: "Inclusive Empowerment",
      metadata: {
        amount: "$500-2000",
        turnaround: "48 hours",
        noRepayment: true
      }
    });
  }

  // International student support
  if (student.internationalStudent) {
    recs.push({
      type: "international-support",
      title: `Connect with ${student.countryOfOrigin} Student Group`,
      description: "Monthly meetup with students from your home country",
      action: "Join WhatsApp group",
      priority: "medium",
      icon: "globe",
      changemaking: "Inclusive Empowerment"
    });
  }

  // Academic support (universal)
  recs.push({
    type: "academic-support",
    title: "Join Success Circle for BES-145",
    description: "Community-based learning with peers and facilitator support",
    action: "RSVP for Tuesday 6-7pm, Room S111",
    priority: "high",
    icon: "users",
    changemaking: "Inclusive Empowerment",
    metadata: {
      facilitator: "Udbhav Verma",
      format: "Learning Circle (not lecture)"
    }
  });

  // Reciprocity - Give Forward
  recs.push({
    type: "reciprocity",
    title: "Give Forward: Mentor a First-Year Student",
    description: "You've received help - now help others succeed",
    action: "Sign up to mentor (2 hours/week)",
    priority: "medium",
    icon: "hand-heart",
    changemaking: "Reciprocity",
    metadata: {
      commitment: "2 hours/week",
      earnUnityPoints: 50
    }
  });

  // Sustainability
  recs.push({
    type: "sustainability",
    title: "Green Career Fair",
    description: "Meet Fraser Valley sustainability employers",
    action: "Register for Thursday 2pm",
    priority: "low",
    icon: "leaf",
    changemaking: "Sustainable Futures",
    metadata: {
      employers: ["City of Abbotsford", "Fraser Basin Council", "BC Hydro"]
    }
  });

  // Community service
  recs.push({
    type: "community-service",
    title: "Volunteer: Tutor Abbotsford Youth",
    description: "Help high school students while building your resume",
    action: "Sign up for 2 hours/week",
    priority: "low",
    icon: "hand-heart",
    changemaking: "Reciprocity",
    metadata: {
      organization: "Abbotsford Community Services",
      credits: "Counts toward graduation"
    }
  });

  // Wellness (holistic)
  recs.push({
    type: "wellness",
    title: "Holistic Wellness Workshop",
    description: "Mind, body, spirit, emotions - Balance all four directions",
    action: "Join Friday 3pm session",
    priority: "medium",
    icon: "sun",
    changemaking: "Inclusive Empowerment"
  });

  return recs;
};

const generateEvents = (student) => {
  const events = [
    { name: "Success Circle: Biology Support", date: "Tue 6pm", location: "Room S111", type: "academic" },
    { name: "Career Fair - Green Jobs", date: "Thu 2pm", location: "Student Union", type: "sustainability" }
  ];

  if (student.indigenousStatus) {
    events.unshift(
      { name: "Elder Mary - Cultural Guidance", date: "Wed 2pm", location: "Indigenous Student Centre", type: "indigenous" }
    );
  }

  if (student.housing && student.housing.includes("Baker")) {
    events.push(
      { name: "Baker House Community Dinner", date: "Fri 6pm", location: "Baker Common Room", type: "community" }
    );
  }

  return events;
};

const UFVOneChangemaking = () => {
  const [studentProfile, setStudentProfile] = useState('default');
  const [data, setData] = useState(null);
  const [showConsent, setShowConsent] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizStep, setQuizStep] = useState(1);
  const [quizData, setQuizData] = useState({
    // Personal wellness
    stressLevel: 3,
    sleepQuality: 3,
    socialComfort: 3,
    preferredLearning: [],
    
    // Skills & interests
    skills: [],
    interests: [],
    careerGoals: [],
    
    // Social preferences
    groupSize: 'small',
    meetingPreference: 'both',
    timeOfDay: [],
    
    // Support needs
    needsSupport: [],
    preferredSupportType: []
  });
  const [language, setLanguage] = useState('en');
  const [highContrast, setHighContrast] = useState(false);
  const [simplifiedView, setSimplifiedView] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [connectedSources, setConnectedSources] = useState({
    brightspace: false,
    studentRecords: false,
    housing: false,
    counselling: false,
    library: false,
    clubs: false,
    indigenousCentre: false,
    careerServices: false
  });

  useEffect(() => {
    setTimeout(() => {
      const studentData = generateStudentData(studentProfile);
      // Merge quiz data into recommendations
      studentData.recommendations = generateRecommendations(studentData.student, quizData);
      setData(studentData);
      setLanguage(studentData.student.language);
      setSimplifiedView(studentData.student.accessibility.simplifiedLanguage);
    }, 500);
  }, [studentProfile, quizData]);

  const handleConnect = (source) => {
    setConnectedSources(prev => ({
      ...prev,
      [source]: !prev[source]
    }));
  };

  const translations = {
    en: {
      welcome: "Welcome to UFV_One",
      tagline: "One Platform. One Login. Unlimited Support.",
      yourCourses: "Your Courses",
      personalizedForYou: "Personalized for You",
      communityImpact: "Your Community Impact"
    },
    pa: {
      welcome: "UFV_One ਵਿੱਚ ਸਵਾਗਤ ਹੈ",
      tagline: "ਇੱਕ ਪਲੇਟਫਾਰਮ। ਇੱਕ ਲੌਗਇਨ। ਬੇਅੰਤ ਸਹਾਇਤਾ।",
      yourCourses: "ਤੁਹਾਡੇ ਕੋਰਸ",
      personalizedForYou: "ਤੁਹਾਡੇ ਲਈ ਨਿੱਜੀਕਰਨ",
      communityImpact: "ਤੁਹਾਡਾ ਭਾਈਚਾਰਕ ਪ੍ਰਭਾਵ"
    },
    zh: {
      welcome: "欢迎来到 UFV_One",
      tagline: "一个平台。一次登录。无限支持。",
      yourCourses: "您的课程",
      personalizedForYou: "为您个性化",
      communityImpact: "您的社区影响"
    }
  };

  const t = translations[language] || translations.en;

  const getChangemakingBadge = (principle) => {
    const badges = {
      "Inclusive Empowerment": { color: "bg-purple-100 text-purple-700 border-purple-300", icon: Users },
      "Indigenization": { color: "bg-orange-100 text-orange-700 border-orange-300", icon: Mountain },
      "Sustainable Futures": { color: "bg-green-100 text-green-700 border-green-300", icon: Leaf },
      "Reciprocity": { color: "bg-blue-100 text-blue-700 border-blue-300", icon: HandHeart }
    };
    return badges[principle] || badges["Inclusive Empowerment"];
  };

  const getRiskColor = (level) => {
    switch(level) {
      case 'high': return 'bg-red-100 border-red-300 text-red-800';
      case 'medium': return 'bg-yellow-100 border-yellow-300 text-yellow-800';
      case 'low': return 'bg-green-100 border-green-300 text-green-800';
      default: return 'bg-gray-100 border-gray-300 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'critical': return 'border-l-4 border-red-600 bg-red-50';
      case 'high': return 'border-l-4 border-red-500';
      case 'medium': return 'border-l-4 border-yellow-500';
      case 'low': return 'border-l-4 border-blue-500';
      default: return 'border-l-4 border-gray-500';
    }
  };

  const getIcon = (iconName) => {
    const icons = {
      users: Users,
      book: BookOpen,
      heart: Heart,
      calendar: Calendar,
      award: Award,
      mountain: Mountain,
      globe: Globe,
      leaf: Leaf,
      'hand-heart': HandHeart,
      sun: Sun,
      compass: Compass
    };
    const Icon = icons[iconName] || AlertCircle;
    return <Icon className="w-5 h-5" />;
  };

  if (!data) {
    return (
      <div className={`min-h-screen ${highContrast ? 'bg-black' : 'bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50'} flex items-center justify-center`}>
        <div className="text-center">
          <div className="relative mb-4">
            <svg width="160" height="70" viewBox="0 0 250 100" xmlns="http://www.w3.org/2000/svg" className="mx-auto animate-pulse">
              {/* O */}
              <rect x="5" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="4" className="text-emerald-600"/>
              <circle cx="45" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="4" className="text-emerald-600"/>
              <circle cx="45" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="4" className="text-emerald-600"/>
              {/* N */}
              <rect x="95" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="4" className="text-teal-600"/>
              <path d="M105 70 L105 20 L165 70 L165 20" fill="none" stroke="currentColor" strokeWidth="4" className="text-teal-600"/>
              {/* E */}
              <rect x="185" y="10" width="60" height="80" fill="none" stroke="currentColor" strokeWidth="4" className="text-teal-600"/>
              <line x1="190" y1="25" x2="240" y2="25" stroke="currentColor" strokeWidth="4" className="text-teal-600"/>
              <line x1="190" y1="50" x2="240" y2="50" stroke="currentColor" strokeWidth="4" className="text-teal-600"/>
              <line x1="190" y1="75" x2="240" y2="75" stroke="currentColor" strokeWidth="4" className="text-teal-600"/>
            </svg>
          </div>
          <p className={`mt-4 font-medium ${highContrast ? 'text-white' : 'text-gray-700'}`}>Loading UFV_One...</p>
          <p className={`text-sm ${highContrast ? 'text-gray-300' : 'text-gray-500'}`}>Your unified success hub</p>
        </div>
      </div>
    );
  }

  // Consent Modal with Changemaking Context
  if (showConsent) {
    return (
      <div className={`min-h-screen ${highContrast ? 'bg-black' : 'bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50'} flex items-center justify-center p-4`}>
        <div className={`${highContrast ? 'bg-gray-900 border-white' : 'bg-white'} rounded-2xl shadow-2xl max-w-3xl w-full p-8 border-2 max-h-[90vh] overflow-y-auto`}>
          {/* Profile Selector for Demo */}
          <div className="mb-6 p-4 bg-blue-50 border-2 border-blue-300 rounded-lg">
            <p className="text-sm font-medium text-blue-900 mb-2">🎭 Demo Mode: Select Student Profile</p>
            <div className="flex gap-2 flex-wrap">
              {['default', 'indigenous', 'international', 'accessibility'].map(profile => (
                <button
                  key={profile}
                  onClick={() => setStudentProfile(profile)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                    studentProfile === profile
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                  }`}
                >
                  {profile.charAt(0).toUpperCase() + profile.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <svg width="120" height="50" viewBox="0 0 250 100" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
              {/* O */}
              <rect x="5" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="4" className="text-gray-900"/>
              <circle cx="45" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="4" className="text-gray-900"/>
              <circle cx="45" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="4" className="text-gray-900"/>
              {/* N */}
              <rect x="95" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="4" className="text-gray-900"/>
              <path d="M105 70 L105 20 L165 70 L165 20" fill="none" stroke="currentColor" strokeWidth="4" className="text-gray-900"/>
              {/* E */}
              <rect x="185" y="10" width="60" height="80" fill="none" stroke="currentColor" strokeWidth="4" className="text-gray-900"/>
              <line x1="190" y1="25" x2="240" y2="25" stroke="currentColor" strokeWidth="4" className="text-gray-900"/>
              <line x1="190" y1="50" x2="240" y2="50" stroke="currentColor" strokeWidth="4" className="text-gray-900"/>
              <line x1="190" y1="75" x2="240" y2="75" stroke="currentColor" strokeWidth="4" className="text-gray-900"/>
            </svg>
            <div>
              <h2 className={`text-2xl font-bold ${highContrast ? 'text-white' : 'text-gray-900'}`}>{t.welcome}</h2>
              <p className="text-sm text-emerald-600 font-medium">{t.tagline}</p>
            </div>
          </div>

          {/* Accessibility Options */}
          <div className="mb-6 p-4 bg-purple-50 border-2 border-purple-300 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-5 h-5 text-purple-600" />
              <h3 className="font-bold text-purple-900">Accessibility Options</h3>
              <span className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded-full font-semibold">
                Inclusive Empowerment
              </span>
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={highContrast}
                  onChange={(e) => setHighContrast(e.target.checked)}
                  className="w-5 h-5"
                />
                <span className="text-sm text-purple-900">High Contrast Mode (for visual impairments)</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={simplifiedView}
                  onChange={(e) => setSimplifiedView(e.target.checked)}
                  className="w-5 h-5"
                />
                <span className="text-sm text-purple-900">Simplified Language (easier to understand)</span>
              </label>
            </div>
          </div>

          {/* Language Selector */}
          <div className="mb-6 p-4 bg-blue-50 border-2 border-blue-300 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <Globe className="w-5 h-5 text-blue-600" />
              <h3 className="font-bold text-blue-900">Choose Your Language</h3>
            </div>
            <div className="flex gap-2">
              {[
                { code: 'en', name: 'English' },
                { code: 'pa', name: 'ਪੰਜਾਬੀ (Punjabi)' },
                { code: 'zh', name: '中文 (Mandarin)' }
              ].map(lang => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    language === lang.code
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div>
          
          <p className={`${highContrast ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
            {simplifiedView 
              ? "Connect your UFV services. We keep your information safe. You control what we use."
              : "UFV_One connects all your university services into a single, personalized hub. Choose which services you'd like to integrate for tailored academic support and recommendations."}
          </p>
          
          <div className="space-y-3 mb-6 max-h-96 overflow-y-auto">
            {[
              { key: 'brightspace', label: 'Brightspace', desc: 'Course grades & assignments', color: 'emerald', changemaking: null },
              { key: 'studentRecords', label: 'Student Records', desc: 'Your program & transcript', color: 'blue', changemaking: null },
              { key: 'housing', label: 'Housing', desc: 'Your residence & events', color: 'purple', changemaking: "Sustainable Futures" },
              { key: 'indigenousCentre', label: 'Indigenous Student Centre', desc: 'Cultural support & Elders', color: 'orange', changemaking: "Indigenization" },
              { key: 'counselling', label: 'Counselling Services', desc: 'Wellness workshops', color: 'pink', changemaking: "Inclusive Empowerment" },
              { key: 'library', label: 'Library Services', desc: 'Research help', color: 'orange', changemaking: null },
              { key: 'clubs', label: 'Clubs & Groups', desc: 'Find your community', color: 'cyan', changemaking: "Reciprocity" },
              { key: 'careerServices', label: 'Career Services', desc: 'Green jobs & co-ops', color: 'green', changemaking: "Sustainable Futures" }
            ].map(source => (
              <div key={source.key} className={`flex items-center justify-between p-4 border-2 ${highContrast ? 'border-white bg-gray-800' : 'border-gray-200'} rounded-xl hover:border-emerald-300 hover:bg-emerald-50 transition-all`}>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className={`font-semibold ${highContrast ? 'text-white' : 'text-gray-900'}`}>{source.label}</span>
                    {source.changemaking && (
                      <span className="text-xs bg-emerald-200 text-emerald-800 px-2 py-1 rounded-full font-semibold">
                        {source.changemaking}
                      </span>
                    )}
                  </div>
                  <div className={`text-sm ${highContrast ? 'text-gray-400' : 'text-gray-500'}`}>{source.desc}</div>
                </div>
                <button
                  onClick={() => handleConnect(source.key)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all transform hover:scale-105 ${
                    connectedSources[source.key]
                      ? 'bg-emerald-100 text-emerald-700 border-2 border-emerald-300'
                      : `${highContrast ? 'bg-gray-700 text-white border-2 border-gray-600' : 'bg-gray-100 text-gray-700'} hover:bg-gray-200 border-2 border-gray-200`
                  }`}
                >
                  {connectedSources[source.key] ? (
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      <span>Connected</span>
                    </div>
                  ) : (
                    'Connect'
                  )}
                </button>
              </div>
            ))}
          </div>
          
          <div className={`${highContrast ? 'bg-gray-800 border-white' : 'bg-emerald-50 border-emerald-200'} border rounded-lg p-4 mb-6`}>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div className={`text-sm ${highContrast ? 'text-gray-300' : 'text-emerald-900'}`}>
                <strong>Your privacy matters:</strong> You control your data. Disconnect anytime. Your information is encrypted and secure.
              </div>
            </div>
          </div>
          
          <button
            onClick={() => {
              setShowConsent(false);
              setShowQuiz(true);
            }}
            className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Continue to Get to Know You Quiz →
          </button>
        </div>
      </div>
    );
  }

  // Get to Know You Quiz
  if (showQuiz) {
    const totalSteps = 5;
    
    return (
      <div className={`min-h-screen ${highContrast ? 'bg-black' : 'bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50'} flex items-center justify-center p-4`}>
        <div className={`${highContrast ? 'bg-gray-900 border-white' : 'bg-white'} rounded-2xl shadow-2xl max-w-3xl w-full p-8 border-2`}>
          <div className="flex items-center justify-center mb-6">
            <svg width="200" height="85" viewBox="0 0 250 100" xmlns="http://www.w3.org/2000/svg">
              {/* O */}
              <rect x="5" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="4" className={highContrast ? 'text-white' : 'text-gray-900'}/>
              <circle cx="45" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="4" className={highContrast ? 'text-white' : 'text-gray-900'}/>
              <circle cx="45" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="4" className={highContrast ? 'text-white' : 'text-gray-900'}/>
              {/* N */}
              <rect x="95" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="4" className={highContrast ? 'text-white' : 'text-gray-900'}/>
              <path d="M105 70 L105 20 L165 70 L165 20" fill="none" stroke="currentColor" strokeWidth="4" className={highContrast ? 'text-white' : 'text-gray-900'}/>
              {/* E */}
              <rect x="185" y="10" width="60" height="80" fill="none" stroke="currentColor" strokeWidth="4" className={highContrast ? 'text-white' : 'text-gray-900'}/>
              <line x1="190" y1="25" x2="240" y2="25" stroke="currentColor" strokeWidth="4" className={highContrast ? 'text-white' : 'text-gray-900'}/>
              <line x1="190" y1="50" x2="240" y2="50" stroke="currentColor" strokeWidth="4" className={highContrast ? 'text-white' : 'text-gray-900'}/>
              <line x1="190" y1="75" x2="240" y2="75" stroke="currentColor" strokeWidth="4" className={highContrast ? 'text-white' : 'text-gray-900'}/>
            </svg>
          </div>
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className={`text-2xl font-bold ${highContrast ? 'text-white' : 'text-gray-900'}`}>
                Get to Know You
              </h2>
              <span className="text-sm text-emerald-600 font-semibold">
                Step {quizStep} of {totalSteps}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-emerald-600 to-teal-600 h-2 rounded-full transition-all"
                style={{ width: `${(quizStep / totalSteps) * 100}%` }}
              ></div>
            </div>
            <p className={`text-sm mt-2 ${highContrast ? 'text-gray-400' : 'text-gray-600'}`}>
              Help us personalize UFV_One for your unique needs and interests
            </p>
          </div>

          {/* Step 1: Wellness Check */}
          {quizStep === 1 && (
            <div className="space-y-6">
              <div className="p-4 bg-pink-50 border-2 border-pink-300 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="w-5 h-5 text-pink-600" />
                  <h3 className="font-bold text-pink-900">Your Wellness Matters</h3>
                  <span className="text-xs bg-pink-200 text-pink-800 px-2 py-1 rounded-full font-semibold">
                    Inclusive Empowerment
                  </span>
                </div>
                <p className="text-sm text-pink-900 mb-4">
                  Understanding how you're feeling helps us provide the right support. All responses are confidential.
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      How stressed are you feeling lately? (1 = Not stressed, 5 = Very stressed)
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map(level => (
                        <button
                          key={level}
                          onClick={() => setQuizData({...quizData, stressLevel: level})}
                          className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                            quizData.stressLevel === level
                              ? 'bg-pink-600 text-white'
                              : 'bg-pink-100 text-pink-700 hover:bg-pink-200'
                          }`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      How would you rate your sleep quality? (1 = Poor, 5 = Excellent)
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map(level => (
                        <button
                          key={level}
                          onClick={() => setQuizData({...quizData, sleepQuality: level})}
                          className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                            quizData.sleepQuality === level
                              ? 'bg-purple-600 text-white'
                              : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                          }`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      How comfortable are you in social situations? (1 = Uncomfortable, 5 = Very comfortable)
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map(level => (
                        <button
                          key={level}
                          onClick={() => setQuizData({...quizData, socialComfort: level})}
                          className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                            quizData.socialComfort === level
                              ? 'bg-blue-600 text-white'
                              : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                          }`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Skills & Talents */}
          {quizStep === 2 && (
            <div className="space-y-6">
              <div className="p-4 bg-emerald-50 border-2 border-emerald-300 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-bold text-emerald-900">Your Skills & Talents</h3>
                  <span className="text-xs bg-emerald-200 text-emerald-800 px-2 py-1 rounded-full font-semibold">
                    Reciprocity
                  </span>
                </div>
                <p className="text-sm text-emerald-900 mb-4">
                  Select all that apply - we'll match you with opportunities to use and share your talents!
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Coding', 'Music', 'Art', 'Writing', 'Math', 'Science',
                    'Languages', 'Sports', 'Public Speaking', 'Leadership',
                    'Photography', 'Video Editing', 'Cooking', 'Crafts'
                  ].map(skill => (
                    <button
                      key={skill}
                      onClick={() => {
                        const skillLower = skill.toLowerCase();
                        setQuizData({
                          ...quizData,
                          skills: quizData.skills.includes(skillLower)
                            ? quizData.skills.filter(s => s !== skillLower)
                            : [...quizData.skills, skillLower]
                        });
                      }}
                      className={`p-3 rounded-lg font-medium transition-all ${
                        quizData.skills.includes(skill.toLowerCase())
                          ? 'bg-emerald-600 text-white'
                          : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                      }`}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Interests & Passions */}
          {quizStep === 3 && (
            <div className="space-y-6">
              <div className="p-4 bg-blue-50 border-2 border-blue-300 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="w-5 h-5 text-blue-600" />
                  <h3 className="font-bold text-blue-900">Your Interests & Passions</h3>
                </div>
                <p className="text-sm text-blue-900 mb-4">
                  What activities make you excited? Select all that interest you.
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Environment', icon: Leaf },
                    { label: 'Technology', icon: Sparkles },
                    { label: 'Social Justice', icon: HandHeart },
                    { label: 'Health & Wellness', icon: Heart },
                    { label: 'Arts & Culture', icon: BookOpen },
                    { label: 'Sports & Fitness', icon: Users },
                    { label: 'Volunteering', icon: HandHeart },
                    { label: 'Gaming', icon: Sparkles },
                    { label: 'Reading', icon: BookOpen },
                    { label: 'Travel', icon: Globe },
                    { label: 'Food & Cooking', icon: Home },
                    { label: 'Indigenous Culture', icon: Mountain }
                  ].map(interest => {
                    const Icon = interest.icon;
                    return (
                      <button
                        key={interest.label}
                        onClick={() => {
                          const interestLower = interest.label.toLowerCase().replace(' & ', '-').replace(/ /g, '-');
                          setQuizData({
                            ...quizData,
                            interests: quizData.interests.includes(interestLower)
                              ? quizData.interests.filter(i => i !== interestLower)
                              : [...quizData.interests, interestLower]
                          });
                        }}
                        className={`p-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
                          quizData.interests.includes(interest.label.toLowerCase().replace(' & ', '-').replace(/ /g, '-'))
                            ? 'bg-blue-600 text-white'
                            : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-sm">{interest.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Learning & Social Preferences */}
          {quizStep === 4 && (
            <div className="space-y-6">
              <div className="p-4 bg-purple-50 border-2 border-purple-300 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-purple-600" />
                  <h3 className="font-bold text-purple-900">Your Learning & Social Style</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      How do you learn best? (Select all that apply)
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {['Visual', 'Auditory', 'Hands-on', 'Reading'].map(style => (
                        <button
                          key={style}
                          onClick={() => {
                            const styleLower = style.toLowerCase();
                            setQuizData({
                              ...quizData,
                              preferredLearning: quizData.preferredLearning.includes(styleLower)
                                ? quizData.preferredLearning.filter(s => s !== styleLower)
                                : [...quizData.preferredLearning, styleLower]
                            });
                          }}
                          className={`p-3 rounded-lg font-medium transition-all ${
                            quizData.preferredLearning.includes(style.toLowerCase())
                              ? 'bg-purple-600 text-white'
                              : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                          }`}
                        >
                          {style}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Preferred group size for activities?
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { value: 'solo', label: 'Solo (1)' },
                        { value: 'small', label: 'Small (2-5)' },
                        { value: 'large', label: 'Large (6+)' }
                      ].map(size => (
                        <button
                          key={size.value}
                          onClick={() => setQuizData({...quizData, groupSize: size.value})}
                          className={`p-3 rounded-lg font-medium transition-all ${
                            quizData.groupSize === size.value
                              ? 'bg-purple-600 text-white'
                              : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                          }`}
                        >
                          {size.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      When are you most productive? (Select all that apply)
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Morning', 'Afternoon', 'Evening'].map(time => (
                        <button
                          key={time}
                          onClick={() => {
                            const timeLower = time.toLowerCase();
                            setQuizData({
                              ...quizData,
                              timeOfDay: quizData.timeOfDay.includes(timeLower)
                                ? quizData.timeOfDay.filter(t => t !== timeLower)
                                : [...quizData.timeOfDay, timeLower]
                            });
                          }}
                          className={`p-3 rounded-lg font-medium transition-all ${
                            quizData.timeOfDay.includes(time.toLowerCase())
                              ? 'bg-purple-600 text-white'
                              : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Career Goals & Support Needs */}
          {quizStep === 5 && (
            <div className="space-y-6">
              <div className="p-4 bg-green-50 border-2 border-green-300 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-5 h-5 text-green-600" />
                  <h3 className="font-bold text-green-900">Your Career Goals</h3>
                  <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full font-semibold">
                    Sustainable Futures
                  </span>
                </div>
                <p className="text-sm text-green-900 mb-4">
                  What career paths interest you? (Select all that apply)
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    'Tech', 'Healthcare', 'Education', 'Business',
                    'Environment', 'Arts', 'Science', 'Social Services',
                    'Government', 'Nonprofit', 'Trades', 'Entrepreneurship'
                  ].map(career => (
                    <button
                      key={career}
                      onClick={() => {
                        const careerLower = career.toLowerCase();
                        setQuizData({
                          ...quizData,
                          careerGoals: quizData.careerGoals.includes(careerLower)
                            ? quizData.careerGoals.filter(c => c !== careerLower)
                            : [...quizData.careerGoals, careerLower]
                        });
                      }}
                      className={`p-3 rounded-lg font-medium transition-all ${
                        quizData.careerGoals.includes(career.toLowerCase())
                          ? 'bg-green-600 text-white'
                          : 'bg-green-100 text-green-700 hover:bg-green-200'
                      }`}
                    >
                      {career}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-orange-50 border-2 border-orange-300 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="w-5 h-5 text-orange-600" />
                  <h3 className="font-bold text-orange-900">Support You Need</h3>
                </div>
                <p className="text-sm text-orange-900 mb-4">
                  What areas would you like support with? (Select all that apply)
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Study Skills', 'Time Management', 'Financial Aid',
                    'Career Planning', 'Mental Health', 'Making Friends',
                    'Academic Writing', 'Public Speaking'
                  ].map(need => (
                    <button
                      key={need}
                      onClick={() => {
                        const needLower = need.toLowerCase().replace(/ /g, '-');
                        setQuizData({
                          ...quizData,
                          needsSupport: quizData.needsSupport.includes(needLower)
                            ? quizData.needsSupport.filter(n => n !== needLower)
                            : [...quizData.needsSupport, needLower]
                        });
                      }}
                      className={`p-3 rounded-lg font-medium transition-all text-sm ${
                        quizData.needsSupport.includes(need.toLowerCase().replace(/ /g, '-'))
                          ? 'bg-orange-600 text-white'
                          : 'bg-orange-100 text-orange-700 hover:bg-orange-200'
                      }`}
                    >
                      {need}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-3 mt-6">
            {quizStep > 1 && (
              <button
                onClick={() => setQuizStep(quizStep - 1)}
                className="flex-1 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all"
              >
                ← Back
              </button>
            )}
            {quizStep < totalSteps ? (
              <button
                onClick={() => setQuizStep(quizStep + 1)}
                className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all"
              >
                Next →
              </button>
            ) : (
              <button
                onClick={() => setShowQuiz(false)}
                className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Complete & View My Dashboard →
              </button>
            )}
          </div>

          <div className="mt-4 text-center">
            <button
              onClick={() => setShowQuiz(false)}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Skip quiz and continue
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Main Dashboard with Full Changemaking Integration
  return (
    <div className={`min-h-screen ${highContrast ? 'bg-black' : 'bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50'}`}>
      {/* Header */}
      <div className={`${highContrast ? 'bg-gray-900 border-white' : 'bg-white'} shadow-md border-b-2`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <svg width="100" height="42" viewBox="0 0 250 100" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                {/* O */}
                <rect x="5" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="5" className="text-emerald-600"/>
                <circle cx="45" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="5" className="text-emerald-600"/>
                <circle cx="45" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="5" className="text-emerald-600"/>
                {/* N */}
                <rect x="95" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="5" className="text-teal-600"/>
                <path d="M105 70 L105 20 L165 70 L165 20" fill="none" stroke="currentColor" strokeWidth="5" className="text-teal-600"/>
                {/* E */}
                <rect x="185" y="10" width="60" height="80" fill="none" stroke="currentColor" strokeWidth="5" className="text-teal-600"/>
                <line x1="190" y1="25" x2="240" y2="25" stroke="currentColor" strokeWidth="5" className="text-teal-600"/>
                <line x1="190" y1="50" x2="240" y2="50" stroke="currentColor" strokeWidth="5" className="text-teal-600"/>
                <line x1="190" y1="75" x2="240" y2="75" stroke="currentColor" strokeWidth="5" className="text-teal-600"/>
              </svg>
              <div>
                <h1 className={`text-2xl font-bold ${highContrast ? 'text-white' : 'bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent'}`}>
                  UFV_One
                </h1>
                <p className={`text-xs ${highContrast ? 'text-gray-400' : 'text-gray-600'}`}>
                  {simplifiedView ? "Your school hub" : "Your Unified Success Hub"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowConsent(true)}
                className="flex items-center gap-2 px-3 py-2 bg-emerald-100 text-emerald-700 rounded-lg hover:bg-emerald-200 transition-all text-sm font-medium"
              >
                <Globe className="w-4 h-4" />
                {language.toUpperCase()}
              </button>
              <div className="text-right">
                <div className={`font-semibold ${highContrast ? 'text-white' : 'text-gray-900'}`}>{data.student.name}</div>
                <div className={`text-sm ${highContrast ? 'text-gray-400' : 'text-gray-600'}`}>{data.student.program}</div>
                {data.student.indigenousStatus && (
                  <div className="text-xs text-orange-600 font-semibold flex items-center gap-1 justify-end">
                    <Mountain className="w-3 h-3" />
                    {data.student.nation} Nation
                  </div>
                )}
                <div className={`text-xs ${highContrast ? 'text-gray-500' : 'text-gray-500'} flex items-center justify-end gap-1`}>
                  <Home className="w-3 h-3" />
                  {data.student.housing}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Alert Banner */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-4 mb-6 rounded-xl shadow-md">
          <div className="flex items-start">
            <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-red-900">
                {simplifiedView ? "Need Help: BES-145" : "Action Needed: BES-145 Performance Alert"}
              </h3>
              <p className="text-sm text-red-700 mt-1">
                {simplifiedView 
                  ? "Your grade is 68%. You missed 2 assignments. We can help you!"
                  : "Your grade has dropped to 68% with 2 missed assignments. UFV_One has found personalized support resources below."}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Courses */}
            <div className={`${highContrast ? 'bg-gray-900 border-white' : 'bg-white'} rounded-xl shadow-lg p-6 border-2`}>
              <h2 className={`text-xl font-bold ${highContrast ? 'text-white' : 'text-gray-900'} mb-4 flex items-center gap-2`}>
                <BookOpen className="w-5 h-5 text-emerald-600" />
                {t.yourCourses}
              </h2>
              <div className="space-y-4">
                {data.courses.map(course => (
                  <div
                    key={course.id}
                    className={`border-2 rounded-xl p-4 cursor-pointer transition-all hover:shadow-lg ${
                      selectedCourse === course.id 
                        ? 'border-emerald-500 bg-gradient-to-r from-emerald-50 to-teal-50 shadow-md' 
                        : `${highContrast ? 'border-white bg-gray-800' : 'border-gray-200'} hover:border-emerald-300`
                    }`}
                    onClick={() => setSelectedCourse(course.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <h3 className={`font-bold text-lg ${highContrast ? 'text-white' : 'text-gray-900'}`}>{course.id}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold border-2 ${getRiskColor(course.riskLevel)}`}>
                            {course.riskLevel.toUpperCase()} RISK
                          </span>
                        </div>
                        <p className={`text-sm mt-1 ${highContrast ? 'text-gray-400' : 'text-gray-600'}`}>{course.name}</p>
                        <div className={`flex items-center gap-4 mt-3 text-sm ${highContrast ? 'text-gray-400' : 'text-gray-500'}`}>
                          <span className="flex items-center gap-1">
                            Grade: <strong className={course.grade < 70 ? 'text-red-600' : 'text-emerald-600'}>{course.grade}%</strong>
                          </span>
                          <span>Missed: <strong>{course.missedAssignments}</strong></span>
                          <span>Active: <strong>{course.lastActivity}</strong></span>
                        </div>
                      </div>
                      <div className="ml-4">
                        {course.trend === 'down' && (
                          <div className="bg-red-100 p-2 rounded-lg">
                            <TrendingDown className="w-6 h-6 text-red-600" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommendations with Changemaking Badges */}
            <div className={`${highContrast ? 'bg-gray-900 border-white' : 'bg-white'} rounded-xl shadow-lg p-6 border-2`}>
              <h2 className={`text-xl font-bold ${highContrast ? 'text-white' : 'text-gray-900'} mb-4 flex items-center gap-2`}>
                <Sparkles className="w-5 h-5 text-emerald-600" />
                {t.personalizedForYou}
              </h2>
              <div className="space-y-4">
                {data.recommendations.map((rec, idx) => {
                  const badge = getChangemakingBadge(rec.changemaking);
                  const BadgeIcon = badge.icon;
                  
                  return (
                    <div key={idx} className={`${highContrast ? 'bg-gray-800 border-white' : 'bg-gradient-to-r from-white to-gray-50 border-gray-200'} border-2 rounded-xl p-4 hover:shadow-lg transition-all ${getPriorityColor(rec.priority)}`}>
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl">
                          {getIcon(rec.icon)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 flex-wrap mb-2">
                            <h3 className={`font-bold ${highContrast ? 'text-white' : 'text-gray-900'}`}>{rec.title}</h3>
                            {rec.changemaking && (
                              <span className={`text-xs px-2 py-1 rounded-full font-semibold border flex items-center gap-1 ${badge.color}`}>
                                <BadgeIcon className="w-3 h-3" />
                                {rec.changemaking}
                              </span>
                            )}
                          </div>
                          <p className={`text-sm mt-2 ${highContrast ? 'text-gray-400' : 'text-gray-600'}`}>
                            {rec.description}
                          </p>
                          <button className="mt-3 px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-sm font-semibold rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all transform hover:scale-105 shadow-md">
                            {rec.action} →
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Community Impact Card - Reciprocity */}
            <div className={`${highContrast ? 'bg-gray-900 border-white' : 'bg-white'} rounded-xl shadow-lg p-6 border-2`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className={`font-bold ${highContrast ? 'text-white' : 'text-gray-900'} flex items-center gap-2`}>
                  <HandHeart className="w-5 h-5 text-blue-600" />
                  {t.communityImpact}
                </h3>
                <button
                  onClick={() => setShowQuiz(true)}
                  className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full hover:bg-emerald-200 transition-all font-semibold"
                  title="Update your preferences"
                >
                  Update
                </button>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                  <div className="text-sm text-blue-900 font-semibold mb-1">Help You've Received</div>
                  <div className="flex justify-between text-xs text-blue-700">
                    <span>SLG Sessions: {data.communityImpact.helpReceived.slgSessions}</span>
                    <span>Counselling: {data.communityImpact.helpReceived.counselling}</span>
                  </div>
                  <div className="text-xs text-blue-700 mt-1">
                    Scholarships: ${data.communityImpact.helpReceived.scholarships}
                  </div>
                </div>

                <div className="p-3 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-lg">
                  <div className="text-sm text-emerald-900 font-semibold mb-1">Help You've Given</div>
                  <div className="flex justify-between text-xs text-emerald-700">
                    <span>Tutoring: {data.communityImpact.helpGiven.peerTutoring}hrs</span>
                    <span>Mentoring: {data.communityImpact.helpGiven.mentoring}</span>
                  </div>
                  <div className="text-xs text-emerald-700 mt-1">
                    Volunteer: {data.communityImpact.helpGiven.volunteerHours}hrs
                  </div>
                </div>

                <div className="p-3 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-purple-900 font-semibold">Reciprocity Score</span>
                    <span className="text-2xl font-bold text-purple-600">
                      {(data.communityImpact.reciprocityScore * 100).toFixed(0)}%
                    </span>
                  </div>
                  <div className="w-full bg-purple-200 rounded-full h-2 mt-2">
                    <div 
                      className="bg-purple-600 h-2 rounded-full transition-all"
                      style={{ width: `${data.communityImpact.reciprocityScore * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-purple-700 mt-1">Keep giving forward!</p>
                </div>
              </div>

              <div className="p-3 bg-green-50 rounded-lg border-2 border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <Leaf className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-semibold text-green-900">Sustainability Impact</span>
                </div>
                <div className="text-xs text-green-700 space-y-1">
                  <div>🌲 Carbon Saved: {data.communityImpact.carbonSaved}</div>
                  <div>📄 Paper Saved: {data.communityImpact.paperSaved} sheets</div>
                </div>
              </div>
            </div>

            {/* Personalization Insights - Show Quiz Results */}
            {(quizData.skills.length > 0 || quizData.interests.length > 0) && (
              <div className={`${highContrast ? 'bg-gray-900 border-white' : 'bg-white'} rounded-xl shadow-lg p-6 border-2`}>
                <h3 className={`font-bold ${highContrast ? 'text-white' : 'text-gray-900'} mb-4 flex items-center gap-2`}>
                  <Sparkles className="w-5 h-5 text-purple-600" />
                  Your Personalization Profile
                </h3>
                
                <div className="space-y-3">
                  {quizData.skills.length > 0 && (
                    <div className="p-3 bg-emerald-50 rounded-lg">
                      <div className="text-xs font-semibold text-emerald-900 mb-2">Your Skills</div>
                      <div className="flex flex-wrap gap-1">
                        {quizData.skills.map(skill => (
                          <span key={skill} className="text-xs bg-emerald-200 text-emerald-800 px-2 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {quizData.interests.length > 0 && (
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <div className="text-xs font-semibold text-blue-900 mb-2">Your Interests</div>
                      <div className="flex flex-wrap gap-1">
                        {quizData.interests.map(interest => (
                          <span key={interest} className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded-full">
                            {interest.replace(/-/g, ' ')}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {quizData.stressLevel >= 4 && (
                    <div className="p-3 bg-pink-50 border-2 border-pink-300 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-pink-600" />
                        <span className="text-xs font-semibold text-pink-900">
                          Wellness support available - we're here for you
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="p-3 bg-purple-50 rounded-lg">
                    <div className="text-xs text-purple-900">
                      <strong>Group Preference:</strong> {quizData.groupSize} groups • 
                      <strong className="ml-2">Best Time:</strong> {quizData.timeOfDay.join(', ') || 'any time'}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setQuizStep(1);
                    setShowQuiz(true);
                  }}
                  className="w-full mt-3 text-sm text-purple-600 hover:text-purple-800 font-semibold py-2 px-4 border-2 border-purple-200 rounded-lg hover:bg-purple-50 transition-all"
                >
                  Retake Quiz
                </button>
              </div>
            )}

            {/* Quick Stats */}
            <div className={`${highContrast ? 'bg-gray-900 border-white' : 'bg-white'} rounded-xl shadow-lg p-6 border-2`}>
              <h3 className={`font-bold ${highContrast ? 'text-white' : 'text-gray-900'} mb-4 flex items-center gap-2`}>
                <Sparkles className="w-4 h-4 text-emerald-600" />
                {simplifiedView ? "Your Stats" : "Quick Stats"}
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg">
                  <span className={`${highContrast ? 'text-white' : 'text-gray-600'} font-medium`}>Overall GPA</span>
                  <span className="font-bold text-emerald-600 text-xl">{data.student.gpa}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className={`${highContrast ? 'text-white' : 'text-gray-600'} font-medium`}>Active Courses</span>
                  <span className="font-bold text-blue-600 text-xl">{data.courses.length}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                  <span className={`${highContrast ? 'text-white' : 'text-gray-600'} font-medium`}>High Risk</span>
                  <span className="font-bold text-red-600 text-xl">
                    {data.courses.filter(c => c.riskLevel === 'high').length}
                  </span>
                </div>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className={`${highContrast ? 'bg-gray-900 border-white' : 'bg-white'} rounded-xl shadow-lg p-6 border-2`}>
              <h3 className={`font-bold ${highContrast ? 'text-white' : 'text-gray-900'} mb-4 flex items-center gap-2`}>
                <Calendar className="w-5 h-5 text-emerald-600" />
                {simplifiedView ? "Events" : "Upcoming Events"}
              </h3>
              <div className="space-y-3">
                {data.upcomingEvents.map((event, idx) => {
                  const eventColors = {
                    indigenous: 'border-orange-500 from-orange-50',
                    academic: 'border-emerald-500 from-emerald-50',
                    sustainability: 'border-green-500 from-green-50',
                    community: 'border-blue-500 from-blue-50'
                  };
                  const color = eventColors[event.type] || 'border-emerald-500 from-emerald-50';
                  
                  return (
                    <div key={idx} className={`border-l-4 ${color} pl-3 py-2 bg-gradient-to-r to-transparent rounded-r-lg`}>
                      <div className={`font-semibold text-sm ${highContrast ? 'text-white' : 'text-gray-900'}`}>
                        {event.name}
                      </div>
                      <div className="text-xs text-emerald-600 font-medium mt-1">{event.date}</div>
                      <div className={`text-xs ${highContrast ? 'text-gray-400' : 'text-gray-500'}`}>{event.location}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Connected Services */}
            <div className={`${highContrast ? 'bg-gray-900 border-white' : 'bg-white'} rounded-xl shadow-lg p-6 border-2`}>
              <h3 className={`font-bold ${highContrast ? 'text-white' : 'text-gray-900'} mb-4 flex items-center gap-2`}>
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                {simplifiedView ? "Connected" : "Connected Services"}
              </h3>
              <div className="space-y-2">
                {Object.entries(connectedSources).map(([key, connected]) => (
                  <div key={key} className={`flex items-center justify-between p-2 rounded-lg ${highContrast ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}`}>
                    <span className={`text-sm ${highContrast ? 'text-gray-400' : 'text-gray-600'} capitalize font-medium`}>
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    {connected ? (
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300" />
                    )}
                  </div>
                ))}
              </div>
              <button 
                onClick={() => setShowConsent(true)}
                className="w-full mt-4 text-sm text-emerald-600 hover:text-emerald-800 font-semibold py-2 px-4 border-2 border-emerald-200 rounded-lg hover:bg-emerald-50 transition-all"
              >
                Manage Connections
              </button>
            </div>

            {/* Changemaking Principles Legend */}
            <div className={`${highContrast ? 'bg-gray-900 border-white' : 'bg-white'} rounded-xl shadow-lg p-6 border-2`}>
              <h3 className={`font-bold ${highContrast ? 'text-white' : 'text-gray-900'} mb-4 flex items-center gap-2`}>
                <Compass className="w-5 h-5 text-emerald-600" />
                Changemaking Principles
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 p-2 bg-purple-50 rounded-lg">
                  <Users className="w-4 h-4 text-purple-600" />
                  <span className="text-xs font-semibold text-purple-900">Inclusive Empowerment</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-orange-50 rounded-lg">
                  <Mountain className="w-4 h-4 text-orange-600" />
                  <span className="text-xs font-semibold text-orange-900">Indigenization</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-green-50 rounded-lg">
                  <Leaf className="w-4 h-4 text-green-600" />
                  <span className="text-xs font-semibold text-green-900">Sustainable Futures</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg">
                  <HandHeart className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-semibold text-blue-900">Reciprocity</span>
                </div>
              </div>
              <p className={`text-xs ${highContrast ? 'text-gray-400' : 'text-gray-600'} mt-3`}>
                Every recommendation supports at least one changemaking principle
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UFVOneChangemaking;