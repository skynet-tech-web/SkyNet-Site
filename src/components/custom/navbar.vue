<template>
  <nav class="navbar">
    <div class="logo">
      <img src="@/assets/skynetlogo.png" alt="">
    </div>
    
    <ul class="nav-links">
      <RouterLink :to="{name: 'index'}" class="nav-item">Home</RouterLink>
      <RouterLink :to="{name: 'services'}" class="nav-item">Web Development</RouterLink>
      <RouterLink :to="{name: 'Animation'}" class="nav-item">3D Animations</RouterLink>
      <RouterLink :to="{name: 'AdCreation'}" class="nav-item">Ad Creation</RouterLink>
    </ul>
    
    <div class="mobile-menu">
      <button @click="toggleMenu" class="menu-button">
        <Menu :class="{'menu-icon': true, 'open': isOpen}" />
      </button>
      <transition name="slide-fade">
        <ul v-if="isOpen" class="mobile-nav">
          <RouterLink :to="{name: 'index'}" class="mobile-nav-item" @click="toggleMenu">Home</RouterLink>
          <RouterLink :to="{name: 'services'}" class="mobile-nav-item" @click="toggleMenu">Web Development</RouterLink>
          <RouterLink :to="{name: 'Animation'}" class="mobile-nav-item" @click="toggleMenu">3D Animations</RouterLink>
          <RouterLink :to="{name: 'AdCreation'}" class="mobile-nav-item" @click="toggleMenu">Ad Creation</RouterLink>
        </ul>
      </transition>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { Menu } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style>
.navbar {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  z-index: 1000;
  margin-top: 20px;
  height: 70px;
}

.logo {
  font-size: 20px;
  font-weight: bold;
  color: white;
}

.logo img {
    height: 50px;
    width: auto;
    margin-left: 20px;

    /* Initial fade-in effect */
    animation: fadeIn 1.5s ease-in-out, pulse 2s infinite alternate;

    /* Smooth transition */
    transition: transform 0.3s ease-in-out;
}

/* Zoom effect on hover */
.logo img:hover {
    transform: scale(1.2); /* Increases size by 20% */
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-item {
  color: #000;
  text-decoration: none;
  transition: transform 0.3s, color 0.3s;
}

.nav-item:hover {
  color: #333;
  transform: scale(1.1);
}

.mobile-menu {
  display: none;
}

.menu-button {
  background: none;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.menu-icon {
  width: 28px;
  height: 28px;
  transition: transform 0.3s ease-in-out;
}

.menu-icon.open {
  transform: rotate(90deg);
}

.mobile-nav {
  position: absolute;
  top: 80px;
  right: 10px;
  width: 200px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  animation: fadeIn 0.3s ease-in-out;
}

.mobile-nav-item {
  color: #000;
  padding: 10px;
  text-decoration: none;
  transition: background 0.3s, transform 0.3s;
  border-radius: 10px;
}

.mobile-nav-item:hover {
  background: rgba(0, 0, 0, 0.1);
  transform: scale(1.05);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease-in-out;
}
.slide-fade-leave-active {
  transition: all 0.2s ease-in-out;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  .mobile-menu {
    display: block;
  }
}
</style>
