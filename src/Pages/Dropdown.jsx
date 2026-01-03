import { useState } from "react";
import { motion, AnimatePresence, } from "framer-motion";
import { ChevronDown, User, Settings, CreditCard, Bell, HelpCircle, LogOut, Shield, Palette } from "lucide-react";




const menuSections = [
  {
    title: "Account",
    items: [
      { icon: <User className="w-4 h-4" />, label: "Profile", description: "Manage your profile" },
      { icon: <Settings className="w-4 h-4" />, label: "Settings", description: "App preferences" },
      { icon: <Bell className="w-4 h-4" />, label: "Notifications", description: "Alert settings", badge: "3" },
    ],
  },
  {
    title: "Preferences",
    items: [
      { icon: <CreditCard className="w-4 h-4" />, label: "Billing", description: "Payment methods" },
      { icon: <Shield className="w-4 h-4" />, label: "Security", description: "Privacy & safety" },
      { icon: <Palette className="w-4 h-4" />, label: "Appearance", description: "Theme & display" },
    ],
  },
  {
    items: [
      { icon: <HelpCircle className="w-4 h-4" />, label: "Help Center" },
      { icon: <LogOut className="w-4 h-4" />, label: "Sign Out" },
    ],
  },
];

const dropdownVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: -10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
      staggerChildren: 0.03,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: -10,
    transition: {
      duration: 0.15,
      ease: "easeInOut",
    },
  },
};

const itemVariants= {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" ,
      stiffness: 400,
      damping: 25,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="relative inline-block">
      {/* Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-5 py-3 bg-dropdown text-white rounded-xl border border-dropdown-border shadow-dropdown transition-all duration-200 hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-semibold">
          JD
        </div>
        <span className="font-medium">John Doe</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </motion.div>
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu */}
            <motion.div
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute top-full right-0 mt-3 w-72 bg-dropdown rounded-2xl border border-dropdown-border shadow-dropdown z-50 overflow-hidden"
            >
              {/* Header */}
              <div className="p-4 border-b border-dropdown-border bg-gradient-to-r from-primary/10 to-accent/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-lg font-bold text-white">
                    JD
                  </div>
                  <div>
                    <p className="font-semibold text-white">John Doe</p>
                    <p className="text-sm text-muted-foreground">john@example.com</p>
                  </div>
                </div>
              </div>

              {/* Menu Sections */}
              <div className="p-2">
                {menuSections.map((section, sectionIndex) => (
                  <motion.div
                    key={sectionIndex}
                    variants={sectionVariants}
                    className={sectionIndex < menuSections.length - 1 ? "mb-2 pb-2 border-b border-dropdown-border" : ""}
                  >
                    {section.title && (
                      <motion.p
                        variants={itemVariants}
                        className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider"
                      >
                        {section.title}
                      </motion.p>
                    )}

                    {section.items.map((item, itemIndex) => {
                      const itemKey = `${sectionIndex}-${itemIndex}`;
                      const isHovered = hoveredItem === itemKey;

                      return (
                        <motion.button
                          key={itemKey}
                          variants={itemVariants}
                          className="relative w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-colors duration-150"
                          onMouseEnter={() => setHoveredItem(itemKey)}
                          onMouseLeave={() => setHoveredItem(null)}
                          whileTap={{ scale: 0.98 }}
                        >
                          {/* Hover Background */}
                          <AnimatePresence>
                            {isHovered && (
                              <motion.div
                                layoutId="hoverBackground"
                                className="absolute inset-0 bg-dropdown-hover/15 rounded-xl"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.15 }}
                              />
                            )}
                          </AnimatePresence>

                          {/* Icon */}
                          <motion.div
                            className={`relative z-10 p-2 rounded-lg transition-colors duration-150 ${
                              isHovered ? "bg-dropdown-hover text-white" : "bg-dropdown-border/50 text-muted-foreground"
                            }`}
                            animate={{
                              scale: isHovered ? 1.1 : 1,
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                          >
                            {item.icon}
                          </motion.div>

                          {/* Content */}
                          <div className="relative z-10 flex-1">
                            <p className={`font-medium transition-colors duration-150 ${isHovered ? "text-white" : "text-white/90"}`}>
                              {item.label}
                            </p>
                            {item.description && (
                              <p className="text-xs text-muted-foreground">{item.description}</p>
                            )}
                          </div>

                          {/* Badge */}
                          {item.badge && (
                            <motion.span
                              className="relative z-10 px-2 py-0.5 text-xs font-semibold bg-dropdown-hover text-white rounded-full"
                              animate={{
                                scale: isHovered ? 1.1 : 1,
                              }}
                              transition={{ type: "spring", stiffness: 400, damping: 20 }}
                            >
                              {item.badge}
                            </motion.span>
                          )}
                        </motion.button>
                      );
                    })}
                  </motion.div>
                ))}
              </div>

              {/* Footer */}
              <motion.div
                variants={itemVariants}
                className="p-3 border-t border-dropdown-border bg-dropdown-border/20"
              >
                <p className="text-center text-xs text-muted-foreground">
                  Powered by <span className="text-primary font-medium">Framer Motion</span>
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;