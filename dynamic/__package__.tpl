<script>
  import PackageBase from "@/components/PackageBase";
  import {getRepository} from "@/model/repositories";
  import {markdownCache} from "@/model/markdownit";
  import readme from '!raw-loader!<%= $readme %>';

  export default {
    extends: PackageBase,
    data: () => ({
      repository: getRepository("<%= $repository.name %>"),
    }),
    created() {
      this.$_readme = markdownCache(this.$md, '<%= $repository.name %>', readme);
    },
  }
</script>
