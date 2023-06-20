<template>
    <div class="notification-container">
        <Notification
            v-for="notification in notifications"
            :type="notification.type"
            :duration="notification.duration"
            :title="notification.title"
            :message="notification.message"
        ></Notification>
    </div>
</template>

<script>
import WebViewEvents from '@utility/webViewEvents';
import { defineComponent, defineAsyncComponent } from 'vue';
import Notification from './components/Notification.vue';
const ComponentName = 'Notifications';
export default {
    name: ComponentName,
    components: {
        Notification,
        Icon: defineAsyncComponent(() => import('@components/Icon.vue')),
    },
    data() {
        return {
            notifications: [],
        };
    },
    methods: {
        createNotification(data) {
            this.notifications.push({
                type: data.type,
                duration: data.duration * 1000,
                title: data.title,
                message: data.message,
            });
        },
        getNotificationsHistory() {
            console.log('[START] 📜 LAST SESSION NOTIFICATIONS');
            this.notifications.forEach(element => {

              console.log(element.title + ' | ' + element.message);
            });
            console.log('[END] 📜 LAST SESSION NOTIFICATIONS');
        },
        clearAll(){
            notifications = [];
        },
        debug() {
            setInterval(() => {
                this.createNotification({
                    type: 0,
                    duration: 7,
                    title: 'Wystąpił błąd',
                    message: 'test dłuższego tekstu o ile wiecie',
                });
                this.createNotification({
                    type: 1,
                    duration: 10,
                    title: 'Wystąpił błąd',
                    message:
                        'test dłuższegohsdf djshf jksdh fsdjkhfsdjk dsf dsf sdf sdfsdfsdfhsdjkfhsdjkf tekstu o ile wiecie o co chodzi xd',
                });
                this.createNotification({
                    type: 2,
                    duration: 4,
                    title: 'Wystąpił błąd',
                    message: 'test dłuższego tekstu o ile wiecie o co chodzi xd',
                });
                this.createNotification({
                    type: 3,
                    duration: 1,
                    title: 'Wystąpił błąd',
                    message: 'test dłuższego tekstu o ile wiecie o co chodzi xd',
                });
                this.createNotification({
                    type: 4,
                    duration: 5,
                    title: 'Wystąpił błąd',
                    message: 'test dłuższego tekstu o ile wiecie o co chodzi xd',
                });
            }, 4000);
        },
    },
    mounted() {
        if ('alt' in window) {
            WebViewEvents.on('fnkynotifications-webview:create', this.createNotification);
            WebViewEvents.on('fnkynotifications-webview:gethistory', this.getNotificationsHistory);
            WebViewEvents.on('fnkynotifications-webview:clearall', this.clearAll);
            WebViewEvents.emitReady(ComponentName);
        } else {
          this.debug();
        }
    },

};
</script>

<style>
#app {
    font-family: Roboto, sans-serif;
}

.notification-container {
    position: fixed;
    width: 15vw;
    max-height: 100%;
    right: 0;
    bottom: 20vh;
}
</style>
