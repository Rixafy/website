<script>
  import PackageBase from "@/components/PackageBase";
  import {getRepository} from "@/model/repositories";

  export default {
    extends: PackageBase,
    asyncData(context) {
      return {
        repository: getRepository("<%= $repository.name %>"),
        readme: context.app.$md.render(require('!raw-loader!<%= $readme %>'))
      }
    }
  }
</script>
