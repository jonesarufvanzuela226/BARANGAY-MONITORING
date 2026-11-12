// --- View Navigation ---
function switchView(viewId) {
  const views = ['loginView', 'forgotView', 'registerView'];
  views.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add('hidden');
  });
  const target = document.getElementById(viewId);
  if (target) target.classList.remove('hidden');
}

// --- Toast Notifications ---
function showToast(message, type = 'info') {
  const toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) return;

  const toast = document.createElement('div');
  const bgColor = type === 'error' ? 'bg-red-500' : type === 'success' ? 'bg-emerald-600' : 'bg-slate-800';

  toast.className = `${bgColor} text-white text-[14px] px-4 py-3 rounded-xl shadow-lg pointer-events-auto transition-all duration-300 opacity-0 transform translate-y-[-10px]`;
  toast.textContent = message;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove('opacity-0', 'translate-y-[-10px]');
  }, 10);

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-[-10px]');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// --- Password Visibility Toggle ---
function setupPasswordToggle(inputId, toggleBtnId, eyeIconId) {
  const passwordInput = document.getElementById(inputId);
  const toggleBtn = document.getElementById(toggleBtnId);
  const eyeIcon = document.getElementById(eyeIconId);

  if (!passwordInput || !toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';

    if (eyeIcon) {
      eyeIcon.innerHTML = isPassword
        ? `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />`
        : `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858-5.908a10.046 10.046 0 013.682-.813c4.478 0 8.268 2.943 9.542 7a10.025 10.025 0 01-4.132 5.411m-4.692-4.692a3 3 0 00-4.243-4.243"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 3l18 18"></path>`;
    }
  });
}

// --- DOM Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  setupPasswordToggle('password', 'togglePassword', 'eyeIcon');
  setupPasswordToggle('regPassword', 'toggleRegPassword', 'regEyeIcon');

  // Registration Handler
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const fullName = document.getElementById('regFullName').value.trim();
      const email = document.getElementById('regEmail').value.trim().toLowerCase();
      const password = document.getElementById('regPassword').value;
      const confirmPassword = document.getElementById('regConfirmPassword').value;

      if (password !== confirmPassword) {
        showToast('Passwords do not match.', 'error');
        return;
      }

      const users = JSON.parse(localStorage.getItem('registeredUsers')) || [];
      const userExists = users.some(u => u.email === email);

      if (userExists) {
        showToast('An account with this email already exists.', 'error');
        return;
      }

      users.push({ fullName, email, password });
      localStorage.setItem('registeredUsers', JSON.stringify(users));

      showToast('Account created successfully! You can now log in.', 'success');
      registerForm.reset();
      switchView('loginView');
    });
  }

  // Login Handler
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const usernameOrEmail = document.getElementById('username').value.trim().toLowerCase();
      const password = document.getElementById('password').value;

      const users = JSON.parse(localStorage.getItem('registeredUsers')) || [];

      const validUser = users.find(u =>
        (u.email === usernameOrEmail || u.fullName.toLowerCase() === usernameOrEmail) &&
        u.password === password
      );

      if (!validUser) {
        showToast('Invalid credentials. Please register an account first.', 'error');
        return;
      }

      localStorage.setItem('currentUser', JSON.stringify({
        fullName: validUser.fullName,
        email: validUser.email
      }));

      showToast('Login successful! Redirecting...', 'success');
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 800);
    });
  }

  // Forgot Password Form Handler
  const forgotForm = document.getElementById('forgotForm');
  if (forgotForm) {
    forgotForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Password reset link sent to your registered email!', 'success');
      forgotForm.reset();
      switchView('loginView');
    });
  }
});