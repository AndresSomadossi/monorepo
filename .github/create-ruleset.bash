FULL_REPO=AndresSomadossi/monorepo

curl -X POST \
-H "Authorization: token $TOKEN" \
-H "Accept: application/vnd.github+json" \
-d '{
  "name": "env-rules",
  "target": {
    "branchProtectionRule": {
      "pattern": "(dev|staging|prod)",
      "allowCreations": false,
      "allowDeletions": false,
      "requiredApprovingReviewCount": 1,
      "requireStatusChecks": true,
      "restrictPushes": true,
      "pushUserIds": []
    }
  }
}' https://api.github.com/repos/$FULL_REPO/rulesets

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


  curl -X PUT \
  -H "Authorization: token $TOKEN" \
  -H "Accept: application/vnd.github+json" \
  https://api.github.com/repos/$FULL_REPO/environments/dev

curl -X PUT \
  -H "Authorization: token $TOKEN" \
  -H "Accept: application/vnd.github+json" \
  https://api.github.com/repos/$FULL_REPO/environments/staging

curl -X PUT \
  -H "Authorization: token $TOKEN" \
  -H "Accept: application/vnd.github+json" \
  https://api.github.com/repos/$FULL_REPO/environments/prod
