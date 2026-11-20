<template>
  <div class="ys-panel">
    <div class="ys-head">🌀 自我养成系统</div>

    <!-- 系统状态 -->
    <div class="ys-body">
      <div class="ys-row">
        <span class="ys-label">时间</span>
        <span class="ys-value">{{ store.data.世界.当前纪元 }} · {{ store.data.世界.日期 }} {{ store.data.世界.时间 }}</span>
      </div>
      <div class="ys-row">
        <span class="ys-label">地点</span>
        <span class="ys-value">{{ store.data.角色.当前位置 }}</span>
      </div>
    </div>

    <!-- 核心数值 -->
    <div class="ys-head">👤 状态</div>
    <div class="ys-body ys-grid">
      <div class="ys-stat">
        <span class="ys-stat-label">身体强度</span>
        <span class="ys-stat-value">{{ store.data.角色.身体强度 }}</span>
        <span class="ys-stat-sub">{{ store.data.角色.身体强度阶位 }}</span>
      </div>
      <div class="ys-stat">
        <span class="ys-stat-label">可用点数</span>
        <span class="ys-stat-value">{{ store.data.角色.可用点数 }}</span>
      </div>
      <div class="ys-stat">
        <span class="ys-stat-label">神性侵蚀度</span>
        <span class="ys-stat-value">{{ store.data.角色.神性侵蚀度 }}</span>
      </div>
      <div class="ys-stat">
        <span class="ys-stat-label">颜值</span>
        <span class="ys-stat-value">{{ store.data.角色.颜值 }}</span>
      </div>
    </div>

    <!-- 身体 -->
    <div class="ys-body">
      <div class="ys-row">
        <span class="ys-label">身高</span>
        <span class="ys-value">{{ store.data.角色.当前身体参数.身高 }} m · {{ store.data.角色.当前身体参数.体重 }} kg · {{ store.data.角色.当前身体参数.三围 }}</span>
      </div>
      <div class="ys-row">
        <span class="ys-label">速度</span>
        <span class="ys-value">{{ store.data.角色.速度数值 }}（{{ store.data.角色.速度阶位 }}）</span>
      </div>
      <div class="ys-row">
        <span class="ys-label">着装</span>
        <span class="ys-value">{{ store.data.角色.衣物.着装风格 }}</span>
      </div>
      <div class="ys-row">
        <span class="ys-label">临时状态</span>
        <span class="ys-value">{{ store.data.角色.临时状态 }}</span>
      </div>
    </div>

    <!-- 已知魔女 -->
    <div class="ys-head">👁 已知魔女</div>
    <div class="ys-body">
      <div v-if="Object.keys(store.data.世界.已知魔女).length === 0" class="ys-empty">尚未遭遇任何魔女</div>
      <div v-for="(info, name) in store.data.世界.已知魔女" :key="name" class="ys-witch">
        <div class="ys-witch-name">{{ name }}</div>
        <div class="ys-witch-info">{{ info }}</div>
      </div>
    </div>

    <!-- 已解锁权能 -->
    <div class="ys-head">✨ 已解锁权能</div>
    <div class="ys-body">
      <div v-if="Object.keys(store.data.角色.已解锁权能).length === 0" class="ys-empty">无</div>
      <div v-for="(desc, name) in store.data.角色.已解锁权能" :key="name" class="ys-row">
        <span class="ys-label">{{ name }}</span>
        <span class="ys-value">{{ desc }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from './store';

const store = useDataStore();
</script>
