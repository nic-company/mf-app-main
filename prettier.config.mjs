import sharedConfig from "@nic/mf-lib-shared/config/prettier";

/**
 * Prettier 설정
 * 공통 라이브러리의 Prettier 설정을 가져와 사용
 *
 * @type {import('prettier').Config}
 */
export default {
  ...sharedConfig,
  // 필요시 이 앱에만 적용할 추가 설정
  // printWidth: 100,
};
