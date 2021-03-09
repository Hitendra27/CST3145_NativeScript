<template>
    <Page style="background-color: azure;">
        <ActionBar title="Web Shop"/>
       <Label text="Welcome to the Pet Shop!" class="h2"/>
       <TabView androidTabsPosition='bottom'>
            <TabViewItem title='Product List' class="h2">
                <Label text='Proudct list coming soon ...'
                class="h2 text-center"/>
            </TabViewItem>
            <TabViewItem title="Check out" class="h2">
                <Label text='checkout form coming soon ...'
                class="h2 text-center"/>
            </TabViewItem>
        </TabView>
    </Page>
</template>

<script>
export default {
    data () {
        return {
        };
    },
}
</script>

<style scoped>
.home-panel {
    vertical-align: center;
    font-size: 20;
    margin: 15;
}

.description-label {
    margin-bottom: 15;
}
</style>
