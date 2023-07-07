#!/bin/bash
cd bundles/
rm -rf *
cd ..
echo "start building projects......"

#工程配置规则
# 工程名:bundle包名
projects=(dm-web:portal dm-web-tags:dm-web-tags dm-web-marketing:dm-web-marketing dm-bpmn:dm-bpmn-editor)

for pro in ${projects[@]}
do
  nameAndBundle=(${pro//:/ })
  echo 'current project is:'${nameAndBundle[0]}', bundle name is:' ${nameAndBundle[1]}

  pwd
  cd ../${nameAndBundle[0]}
  git checkout $1
  git pull origin $1

  #pnpm install  
  pnpm build

  cp -avx ${nameAndBundle[1]} ../dm-project-deploy/bundles

  echo "projects building  end"
done
