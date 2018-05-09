<script>
  import readme from "!raw-loader!<%= $readme %>";
  import PackageBase from "@/components/PackageBase";
  import {getRepository} from "@/model/repositories";

  export default {
    extends: PackageBase,
    asyncData() {
      return {
        repository: getRepository("<%= $repository.name %>"),
        readme
      }
    },
  }
</script>
