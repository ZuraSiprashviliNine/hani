<template>
    <div id="toolbar" class="toolbar">
        <div class="container">
            <div class="row">
                <div class="col-12 p-1">
                    <div class="toolbar-wrap">
                        <toolbar-logo />
                        <toolbar-navigation />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import toolbarLogo from './logo';
import toolbarNavigation from './navigation';

export default {
    components: {
        toolbarLogo,
        toolbarNavigation
    }
}
</script>