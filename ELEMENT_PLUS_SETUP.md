# Element Plus 按需导入配置说明

## 已完成的配置

### 1. 安装的包
- `element-plus` - Element Plus 核心包
- `unplugin-vue-components` - 自动导入组件插件
- `unplugin-auto-import` - 自动导入API插件
- `@types/node` - Node.js 类型定义

### 2. Vite 配置
在 `vite.config.ts` 中已配置：
```typescript
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  // ...
});
```

### 3. TypeScript 配置
在 `tsconfig.app.json` 中已添加：
- 路径映射：`"@/*": ["./src/*"]`
- 自动导入类型文件：`"auto-imports.d.ts"`, `"components.d.ts"`

## 使用方法

### 组件使用
现在可以直接在 Vue 组件中使用 Element Plus 组件，无需手动导入：

```vue
<template>
  <div>
    <el-button type="primary">按钮</el-button>
    <el-input v-model="inputValue" placeholder="请输入内容" />
    <el-card>
      <template #header>
        <div class="card-header">
          <span>卡片标题</span>
        </div>
      </template>
      <p>卡片内容</p>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const inputValue = ref('')
</script>
```

### API 使用
Element Plus 的 API 也会自动导入：

```vue
<script setup lang="ts">
import { ElMessage, ElNotification } from 'element-plus'

const showMessage = () => {
  ElMessage.success('操作成功！')
}

const showNotification = () => {
  ElNotification({
    title: '通知',
    message: '这是一条通知消息',
    type: 'info'
  })
}
</script>
```

## 注意事项

1. 首次使用后，会自动生成 `auto-imports.d.ts` 和 `components.d.ts` 文件
2. 这些文件应该被添加到 `.gitignore` 中，因为它们是自动生成的
3. 如果遇到类型错误，请重启 TypeScript 服务
4. 确保在 `tsconfig.app.json` 中包含了自动生成的类型文件

## 验证配置

运行以下命令验证配置是否正确：

```bash
npm run dev
```

如果配置正确，应该能够正常使用 Element Plus 组件而不会出现导入错误。

