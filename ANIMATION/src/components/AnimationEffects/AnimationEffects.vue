<template>
  <div>
    <div class="animation-section">
      <div class="title">Wiggle</div>
      <div class="demo-box wiggle">Hover</div>
      <div class="desc">A quick left-right rotation like shaking “no”.</div>
    </div>

    <div class="animation-section">
      <div class="title">Nudge</div>
      <div class="demo-box nudge">Hover</div>
      <div class="desc">Slides slightly left and returns — a subtle hint.</div>
    </div>

    <div class="animation-section">
      <div class="title">Pulse</div>
      <div class="demo-box pulse">Hover</div>
      <div class="desc">Scales up briefly like a heartbeat effect.</div>
    </div>

    <div class="animation-section">
      <div class="title">Hover Bounce</div>
      <div class="demo-box hover-bounce">Hover</div>
      <div class="desc">Jumps up and down to simulate bounce on hover.</div>
    </div>

    <div class="animation-section">
      <div class="title">Vibrate</div>
      <div class="demo-box vibrate">Hover</div>
      <div class="desc">Creates a quick back-and-forth vibration effect.</div>
    </div>

    <div class="animation-section">
      <div class="title">Tap Feedback</div>
      <div class="demo-box tap">Click</div>
      <div class="desc">Shrinks slightly to give feedback on tap/click.</div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.animation-section {
  margin-bottom: 3rem;
  color: white;
}

.title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.demo-box {
  width: 120px;
  height: 120px;
  background: #007bff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 0.5rem;
  transition: transform 0.2s ease;
  user-select: none;
}

.desc {
  font-size: 0.85rem;
  color: #444;
  max-width: 200px;
}

/* Animations */
@keyframes wiggle {
  0%,
  100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(5deg);
  }
  50% {
    transform: rotate(-5deg);
  }
  75% {
    transform: rotate(5deg);
  }
}

@keyframes nudge {
  50% {
    transform: translateX(-10px);
  }
}

@keyframes pulse {
  50% {
    transform: scale(1.1);
  }
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(0);
  }
  70% {
    transform: translateY(-6px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes vibrate {
  0%,
  100% {
    transform: translateX(0);
  }
  20%,
  60% {
    transform: translateX(-2px);
  }
  40%,
  80% {
    transform: translateX(2px);
  }
}

@keyframes tap {
  50% {
    transform: scale(0.95);
  }
}

.wiggle {
  animation: wiggle 0.4s ease infinite;
}
.nudge {
  animation: nudge 0.3s ease infinite;
}
.pulse {
  animation: pulse 1s ease infinite;
}
.hover-bounce {
  animation: bounce 0.6s ease infinite;
}
.vibrate {
  animation: vibrate 0.3s linear infinite;
}
.tap:active {
  animation: tap 0.2s ease infinite;
}
</style>
