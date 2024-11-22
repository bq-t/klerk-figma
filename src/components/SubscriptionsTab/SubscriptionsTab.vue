<template>
  <content-tab
    class="subscriptions-tab"
    label="Выберите рассылки, которые подходят именно вам"
  >
    <template #header-actions>
      <form class="subscriptions-tab__form">
        <form-input
          class="subscriptions-tab__form-input"
          placeholder="Электронная почта"
        />
        <form-button
          class="subscriptions-tab__form-button"
          @click.prevent
        >
          Подписаться
        </form-button>
        <form-switch
          :model-value="followedAllSubscriptions"
          class="subscriptions-tab__form-switch"
          label="Подписаться на все рассылки"
          size="sm"
          @update:model-value="switchAllSubscriptions"
        />
      </form>
    </template>
    <template #body>
      <content-tab-body class="subscriptions-tab__body">
        <subscription-card
          v-for="(subscription, subscriptionIndex) in computedSubscriptions"
          :key="subscriptionIndex"
          v-bind="subscription"
          @switch="val => switchSubscription(subscriptionIndex, val)"
        />
      </content-tab-body>
    </template>
  </content-tab>
</template>

<script setup>
// Form components
import FormButton from '@/components/Button/Button'
import FormInput from '@/components/Input/Input'
import FormSwitch from '@/components/Switch/Switch'
// Tab components
import ContentTab from '@/components/ContentTab/ContentTab'
import ContentTabBody from '@/components/ContentTab/ContentTabBody'
import SubscriptionCard from '@/components/SubscriptionCard/SubscriptionCard'

import { computed, ref } from 'vue'

// No needs reactivity
const availableSubscriptions = [
  {
    category: 'Перед рассветом',
    title: 'Утренний бухгалтер',
    description: 'Самые важные новости и события за день. Кратко, по делу, структурировано.',
    previewSrc: '/img/MorningAccountant.svg',
    amenities: [
      {
        label: 'Новости для бухгалтеров, ИП и директора',
      },
      {
        label: 'Подборка статей за день',
      },
    ],
    followCount: 59342,
  },
  {
    category: 'После заката',
    title: 'Ночной бухгалтер',
    description: 'Самая краткая газета о налогах и бухучете в мире — современная рассылка для чтения.',
    previewSrc: '/img/NightAccountant.svg',
    amenities: [
      {
        label: 'Анализ, оценка и только самое главное',
      },
      {
        label: 'Лучшие комменты юзеров в обзоре',
      },
    ],
    followCount: 37480,
  },
  {
    category: 'Раз в две недели',
    title: 'Ножницы скидок',
    description: 'Подборка самых выгодных и полезных спецпредложений от надежных компаний.',
    previewSrc: '/img/DiscountScissors.svg',
    amenities: [
      {
        label: 'Акции и скидки от лидеров рынка',
      },
      {
        label: 'Те, кто подписался – экономят много денег',
      },
    ],
    followCount: 92118,
  },
  {
    category: 'По мере появления анонсов',
    title: 'Чемодан вебинаров',
    description: 'Подборка с анонсами бесплатных вебинаровна самые топовые темы при участии экспертов.',
    previewSrc: '/img/SuitcaseOfWebinars.svg',
    amenities: [
      {
        label: 'Никогда не пришлем платные вебинары',
        fire: true,
      },
      {
        label: 'Подборка топовых тем для вебинаров',
      },
    ],
    followCount: 92082,
  },
]

const activeSubscriptions = ref([])
function switchSubscription(subIndex, val) {
  if (val) {
    activeSubscriptions.value.push(subIndex)
    return
  }
  activeSubscriptions.value = activeSubscriptions.value.filter(val => val !== subIndex)
}

const followedAllSubscriptions = computed(() => activeSubscriptions.value.length === availableSubscriptions.length)
function switchAllSubscriptions() {
  if (followedAllSubscriptions.value) {
    activeSubscriptions.value = []
    return
  }

  let activeArray = []
  for (let i=0; i <= availableSubscriptions.length - 1; i++) {
    activeArray.push(i)
  }
  activeSubscriptions.value = activeArray
}

const computedSubscriptions = computed(() => {
  return availableSubscriptions.map((item, itemIndex) => {
    const isActive = activeSubscriptions.value.includes(itemIndex)

    return {
      ...item,
      ...isActive ? {
        followCount: item.followCount + 1,
        active: isActive,
      } : {},
    }
  })
})
</script>

<style lang="scss" scoped>
.subscriptions-tab {
  &__form {
    @apply relative;

    &-input {
      @apply w-[calc(100%-6.25rem)] pr-20;
    }

    &-button {
      @apply absolute right-0;
    }

    &-switch {
      @apply mt-4;
    }
  }

  &__body {
    @apply lg:grid lg:grid-cols-2 lg:gap-6;
  }
}
</style>