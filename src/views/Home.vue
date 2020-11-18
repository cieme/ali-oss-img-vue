<template>
  <div class="home">
    <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :http-request="uploadFile"
      :on-change="handleChange"
      :file-list="fileList3"
      list-type="picture-card"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </el-upload>
  </div>
</template>

<script>
const OSS = require("ali-oss");
export default {
  name: "Home",
  data() {
    return {
      fileList3: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ]
    };
  },
  methods: {
    handleChange() {},
    uploadFile(file) {
      let b = file.file;
      this.client
        .multipartUpload(`media/${Date.parse(new Date())}`, b)
        .then(response => {
          if (response.res.status === 200) {
            console.log("上传了");
          }
        })
        .catch(err => {
          console.error("error: ", err);
        });
    }
  },
  mounted() {
    this.client = new OSS({
      accessKeyId: "LTAI4G8iK93pkhWYsqvfvbEd",
      accessKeySecret: "SywasveikbYaDdB1hFUH9dBToxWjhI",
      region: "oss-cn-beijing",
      bucket: "test1008611"
    });
  }
};
</script>
