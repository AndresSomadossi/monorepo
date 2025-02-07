FULL_REPO=AndresSomadossi/monorepo

curl -X PATCH \
  -H "Authorization: token $TOKEN" \
  -H "Accept: application/vnd.github+json" \
  -d '{
    "allow_merge_commit": false,
    "allow_rebase_merge": false,
    "allow_squash_merge": true,
    "allow_auto_merge": true,
    "delete_branch_on_merge": true
  }' \
  https://api.github.com/repos/$FULL_REPO
